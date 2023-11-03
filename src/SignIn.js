import React, {useState} from 'react'

function SignIn() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 signin">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-white p-10">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto rounded-full"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL2ZTVdhPucsbFcYuAFUw12Jf43wu0IC_qsLI1LZbeE-tfFDL_o64S1wLwwrQ3owPO&usqp=CAU"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Welcome Back!!
                    </h2>
                    <p className="text-center">Please enter your credentials to sign in!</p>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div className="mb-4">
                            <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="name">
                                User name
                            </label>
                            <input
                                type="name"
                                id="name"
                                name="name"
                                placeholder="admin"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <div class="password-toggle">
                            <div class="flex items-center justify-between">
                                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                <div class="icon">
                                    <i
                                        className={`toggle-password far ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}
                                        id="togglePassword"
                                        onClick={togglePasswordVisibility}
                                    ></i>
                                </div>
                            </div>
                            <div class="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete="current-password"
                                    required
                                    placeholder="Enter Your Password"
                                    className="password-input block w-full rounded-md border-0 py-1.5 text-gray-900 p-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <input type="checkbox" />{' '}
                            <span className="ml-2 text-indigo-600">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Remember Me
                                </a>
                            </span>
                            <div className="text-sm ml-auto">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Don't have an account yet?
                        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
