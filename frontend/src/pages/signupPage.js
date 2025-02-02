
const signup = {

    async render() {
        return /*html*/`
        <body class="bg-white">
        <!-- url('/img/hero-pattern.svg') -->
        <div class="flex min-h-screen bg-white">
        
            <div class="w-1/2 bg-cover md:block hidden" style="background-image:  url(https://images.unsplash.com/photo-1520243947988-b7b79f7873e9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDd8fGJsYWNrJTIwZm9yZXN0fGVufDB8fDB8eWVsbG93&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60)"></div>
            <!-- <div class="bg-no-repeat bg-right bg-cover max-w-max max-h-8 h-12 overflow-hidden">
                <img src="log_in.webp" alt="hey">
            </div> -->
        
        
            <div class="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">
        
                <div class="text-left p-0 font-sans">
                    
                    <h1 class=" text-gray-800 text-3xl font-medium">Create an account for free</h1>
                    <h3 class="p-1 text-gray-700">Free forever. No payment needed.</h3>
                </div>
                <form  id= "form-add" action="#" class="p-0">
                    <div class="mt-5">
        
                        <!-- <label for="email" class="sc-bqyKva ePvcBv">Email</label> -->
                        <input type="text" id="email" class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent " placeholder="Email">
                    </div>
                    <div class="mt-5">
                        <input type="text" id="name" class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent " placeholder="User-name">
                    </div>
                    <div class="mt-5">
                        <input type="password" id="password" class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  " placeholder="Password">
                    </div>
        
        
                    <div class="mt-10">
                        <input type="submit" value="Sign up with email" class="py-3 bg-green-500 text-white w-full rounded hover:bg-green-600">
                    </div>
                </form>
                <a class="" href="/#/signin" data-test="Link"><span class="block  p-5 text-center text-gray-800  text-xs ">Already have an account?</span></a>
            </div>
        
        
        </div>
                    
        </body>
        `
    },
    afterRender() {
        const formAdd = document.querySelector("#form-add");
        formAdd.addEventListener('submit', async (e) => {
            e.preventDefault();
            const user = {
                 email: document.querySelector('#email').value,
                 name: document.querySelector('#name').value,
                 password: document.querySelector('#password').value
    
            };
            fetch("http://localhost:4000/api/signup", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
              })
              .then((response) => response.json())
              .then((user) => console.log(user));
              alert("Đăng kí tài khoản thành công");
              window.location.hash = '/signin';
        })

    }
}
export default signup;

