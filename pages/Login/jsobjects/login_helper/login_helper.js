export default {
	handleLogin: (response)=>{
		if(response.token){
			storeValue('token', response.token)
			navigateTo('Users')
		} else {
			showAlert('Invalid username or password!')
		}
	}
}