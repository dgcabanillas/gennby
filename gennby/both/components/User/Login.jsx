Login = React.createClass({
	onSubmit(e) {
		e.preventDefault();
		// Get our input values
		var el = $(e.target);
		var nick = el.find("#login-nick").val();
		var password = el.find("#login-password").val();

		// Login user
		Meteor.loginWithPassword(nick, password, (er)=>{
			if(er) {
				Materialize.toast(er.reason, 4000);
			} else {
				//Redirect
				FlowRouter.go('/');
			}
		});
	},
	render() {
		return (
			<div className="row">
				<h4 className="text-center">Welcome!!</h4>
				<form onSubmit={this.onSubmit} className="col offset-s4 s4">
					<div className="row">
						<div className="input-field col offset-s1 s10">
							<input id="login-nick" type="text" className="validate" />
							<label htmlFor="login-nick">Nick or Username</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col offset-s1 s10">
							<input id="login-password" type="password" className="validate" />
							<label htmlFor="login-password">Password</label>
						</div>
					</div>
					<div className="row">
						<div className="inline">
							<label className="col offset-s1 s4">Remember me</label>
							<div className="col pull-s1 s3">
								<div className="switch">
									<label>
									    <input type="checkbox" />
									   	<span className="lever"></span>
									</label>
								</div>
							</div>
							<button className="col s3 waves-effect waves-light btn">SIGN IN</button>
						</div>
					</div>
					<div className="row">
						<div className="col offset-s5 s7">
							<a href="">forgot your password?</a>
						</div>
					</div>
					<div className="row">
							<button className="col s6 waves-effect waves-light btn">Sign in with Facebook</button>
							<button className="col s6 waves-effect waves-light btn">Sign in with Twitter</button>
					</div>
				</form>
				<div className="col offset-s4 s4">
					<h6 className="text-center">Don't have an account yet? <a href="">Register</a></h6>
				</div>
			</div>
		);	
	}
});