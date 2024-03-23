export default {
	handleLogin: (response)=>{
		if(response.token){
			showAlert(response.token)
			storeValue('token', response.token)
			navigateTo('Customer Information')
		} else {
			showAlert('Invalid username or password!')
		}
	}
}