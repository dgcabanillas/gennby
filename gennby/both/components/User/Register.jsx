Register = React.createClass({
	onSubmit(e) {
		e.preventDefault();
		var ele = $(e.target);

		var tag = ele.find("#form-tag").val();
		var fname = ele.find("#form-fname").val();
		var lname = ele.find("#form-lname").val();
		var birthdate = ele.find("#form-birthdate").val();
		var email = ele.find("#email").val();
		var password = ele.find("#password").val();
		var confirmPassword = ele.find("#confirmPassword").val();
		if(password === confirmPassword && password !== "" && confirmPassword !== "") {
			var accountInfo = {
				email: email,
				password: password
			};
			Accounts.createUser(accountInfo, function(er) {
				if(er) {
					Materialize.toast(er.reason, 4000);
				} else {
					//Redirect
					FlowRouter.go('/');
				}
			});
		} else {
			Materialize.toast('Your passwords dont match!', 4000);
		}
	},
	render() {
		return (
			<div className="row">
				<div className="col offset-s1 s5">
					<p className="right-align">Why are waiting for?</p>
					<p className="right-align">Join us, right now!</p>
					<br />

					<p className="right-align">Membresias gratuitas siempre,</p>
					<p className="right-align">t&uacute; decides lo dem&aacute;s</p>
					<br />

					<p className="right-align">
						COMPITE en miles de torneos disponibles	
					</p>
					<p className="right-align">
						PLANEA tu avance hacia la gloria	
					</p>
					<p className="right-align">
						COOPERA coopera con la comunidad gamer local en un impacto positvo	
					</p>
					<p className="right-align">
						<strong>Gracias</strong>, <a href="">ya tengo una cuenta</a>	
					</p>
				</div>
				

				<div className="col s5">
					<div className="row">
							<button className="col s6 waves-effect waves-light btn">Register with Facebook</button>
							<button className="col s6 waves-effect waves-light btn">Register with Twitter</button>
					</div>
					<form onSubmit={this.onSubmit} className="col s12">
						<div className="row">
							<div className="input-field col s12">
								<input id="form-tag" type="text" className="validate" placeholder="Enter your gamer tag" />
							</div>
						</div>
						<div className="row">
							<div className="input-field col s6">
								<input id="form-fname" type="text" className="validate" />
								<label htmlFor="form-fname">First Name</label>
							</div>
							<div className="input-field col s6">
								<input id="form-lname" type="text" className="validate" />
								<label htmlFor="form-lname">Last Name</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<i class="tiny material-icons prefix">today</i>
  								<input id="form-birthdate" type="date" class="datepicker"/>
								<label htmlFor="form-birthdate">Birthdate</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<input id="form-email" type="email" className="validate" />
								<label htmlFor="form-email">Your Email</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<input id="form-password" type="password" className="validate" />
								<label htmlFor="form-password">Your Password</label>
							</div>
						</div>
						<div className="row">
							<label>Are you...</label>
							<div className="input-field col s12 inline">
								<div className="col s4">
									<input name="gender" type="radio" id="form-male" />
      								<label htmlFor="form-male">A boy</label>
								</div>
      							<div className="col s4">
									<input name="gender" type="radio" id="form-female" />
      								<label htmlFor="form-female">A Girl</label>
								</div>
								<div className="col s4">
									<input name="gender" type="radio" id="form-notspecified" />
      								<label htmlFor="form-notspecified">Not specified</label>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s8">
								<input id="form-country" type="text" className="validate" />
								<label htmlFor="form-country">Country</label>
							</div>
						</div>
						<div className="row">
							<div className="col s12">
								<p text-center>It's almost over! Accepting our <a href="#">terms and conditions</a></p>
								<p text-center>gives you an automatic registration</p>
							</div>
						</div>
						<div className="row">
							<button className="waves-effect waves-light btn btn-block col offset-s1 s10">AGREE</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
});