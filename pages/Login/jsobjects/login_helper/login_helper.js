export default {
	handleLogin: (response)=>{
		if(response.token){
			showAlert(response.token)
			storeValue('token', response.token)
			navigateTo('Users')
		} else {
			showAlert('Invalid username or password!')
		}
	}
}