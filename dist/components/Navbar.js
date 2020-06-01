let Navbar = {
     renderSignUp:   () => {

        let view = ` <ul>
        <li class=p1>
          <div class="shadow">
          </div>
        </li>
        <li class="p1"><a href="#/login">Sign in</a></li>
      </ul>
        `
        return view
    },
    renderLogin:   () => {

      let view = ` <ul>
      <li class=p1>
        <div class="shadow">
        </div>
      </li>
      <li class="p1"><a href="index.html">Sign up</a></li>
    </ul>
      `
      return view
  },
    after_render:  () => {
        console.log('rendered navbar');
     }

}

export default Navbar;