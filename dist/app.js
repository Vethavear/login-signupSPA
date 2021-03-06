import Login     from './views/Login.js'
import Navbar       from './/components/Navbar.js'
import Home         from './views//Home.js'
import Utils        from './services/Utils.js'
const routes = {
    '/'             : Home
    , '/login'   : Login
};

// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = async () => {

    // Lazy load view element:
    const header = document.getElementById('header_container');

    const content = null || document.getElementById('showcase-content');

    // Get the parsed URl from the addressbar
    let request = Utils.parseRequestURL()

    // Parse the URL and if it has an id part, change it with the string ":id"
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    
    // Get the page from our hash of supported routes.
    // If the parsed URL is not in our list of supported routes, select the 404 page instead
    let page = routes[parsedURL] ? routes[parsedURL] : Error404
    content.innerHTML = await page.render();
    await page.after_render();

    if(parsedURL == '/login'){

        header.innerHTML = Navbar.renderLogin();
    } else{
        header.innerHTML = Navbar.renderSignUp();
    }



}

// Listen on hash change:
window.addEventListener('hashchange', router);

// // Listen on page load:
window.addEventListener('load', router);


