import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import * as templates from './templates'

document.body.innerHTML = templates.main()

const mainElement = document.body.querySelector('.b4-main')
const alertsElement = document.body.querySelector('.b4-alerts')

const getBundles = async () => {
  const esRes = await fetch("/es/b4/bundle/_search?size=1000")

  const esResBody = await esRes.json()

  return esResBody.hits.hits.map(hit => ({
    id: hit._id,
    name: hit._source.name
  }))
}

const showAlert = (message, type = 'dnager') => {
  const html = templates.alert({ type, message })
  alertsElement.insertAdjacentHTML('beforeend', html)
}

const addBundle = async (name) => {
  try {
    const bundles = await getBundles()

    const url = `/api/bundle?name=${encodeURIComponent(name)}`
    const res = await fetch(url, { method: 'POST' })
    const resBody = await res.json()

    bundles.push({ id: resBody._id, name })
    listBundles(bundles)

    showAlert(`Bundle ${name} created!`, 'success')
  } catch (err) {
    showAlert(err)
  }
}

const deleteBundle = async (bundleId) => {
  try {
    const bundles = await getBundles()
    let index = -1
    for (let i = 0, l = bundles.length; i < l; i++) {
      if (bundles[i].id === bundleId) {
        index = i
      }
    }
    if (index > -1) {      
      const url = `/api/bundle/${encodeURIComponent(bundles[index].id)}`
      const res = await fetch(url, { method: 'DELETE' })
      const resBody = await res.json()
      console.log(resBody)
      showAlert(`Bundle deleted!`, `success`)
      bundles.splice(index, 1)
      listBundles(bundles)
    } else {
      throw Error('This bundle does not exist!')
    }
  } catch (err) {
    showAlert(`${err.message}`, `danger`)
  }
}

const listBundles = bundles => {
  mainElement.innerHTML = templates.addBundleForm() + templates.listBundles({ bundles })

  const deleteButtons = mainElement.querySelectorAll('button.delete')
  for (let i = 0; i < deleteButtons.length; i++) {
    const deleteButton = deleteButtons[i]
    deleteButton.addEventListener('click', event => {
      deleteBundle(deleteButton.getAttribute('data-bundle-id'))
    })
  }

  const form = mainElement.querySelector('form')
  form.addEventListener('submit', event => {
    event.preventDefault()
    const name = form.querySelector('input').value
    addBundle(name)
  })
}

const showView = async () => {
  const [view, ...params] = window.location.hash.split("/")
  switch (view) {
    case "#welcome":
      mainElement.innerHTML = templates.welcome()
      break;
    case '#list-bundles':
      const bundles = await getBundles()
      listBundles(bundles)
      break;
    default:
      throw Error(`Unrecognized view: ${view}`)
  }
}



window.addEventListener('hashchange', showView)
showView().catch(err => (window.location.hash = '#welcome'))