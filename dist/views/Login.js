

let Login = {
    render: async () => {

        let view =  /*html*/`
        <div class="formLoginContainer">
        <div class="top">
          <h1 class="center my-2">Sign in</h1>
          <form autocomplete="off"  class="formLogin">
            <div class="row">
              <input type="email" name="email" ><label for="email">E-mail</label>
            </div>
            <div class="row">
              <input type="password" name="password" ><label for="password">Password</label>
            </div>
              <button type="button">Login</button>
          </form>
        </div>
        <div class="bottom"></div>

      </div>
        `
        return view
    }
    , after_render: async () => {
        const inputs = document.querySelectorAll('input');
        const labels = document.querySelectorAll('label');
        const button = document.querySelector('i');
        const showcase = document.getElementById('showcase');
        showcase.classList.add('loginBg');
        function clearHide() {
            labels.forEach(label => {
                label.classList.remove('hide');
            })
        }


        inputs.forEach(input => {
            input.addEventListener('focus', e => {
                clearHide();
                const name = input.name;
                document.querySelector(`label[for="${name}"]`).classList.add('hide');
            })
        })


    }

}

export default Login;