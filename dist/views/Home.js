

let Home = {
    render: async () => {

        let view =  /*html*/`
        <div class="formSignup">
          <div class="left"></div>
          <div class="right">
            <h1 class="center my-2">Sign up</h1>
            <form autocomplete="off">
              <div class="row">
                <input type="text" name="name"><label for="name">Name</label>
              </div>
              <div class="row">
                <input type="text" name="surname"><label for="surname">Surname</label>
              </div>
              <div class="row">
                <input type="email" name="email"><label for="email">E-mail</label>
              </div>
              <div class="row">
                <input type="password" name="password"><label for="password">Password</label>
              </div>
              <button type="button"><i class="fas fa-chevron-right"></i></button>
            </form>
          </div>
        </div>
      </div>
   
        `
        return view
    }
    , after_render: async () => {

        const inputs = document.querySelectorAll('input');
        const labels = document.querySelectorAll('label');
        const button = document.querySelector('i');
        const showcase = document.getElementById('showcase');
        showcase.classList.add('registerBg');
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

        button.addEventListener('click', onClick => {

            button.classList.add('smashDatWall');
        })

    }

}

export default Home;