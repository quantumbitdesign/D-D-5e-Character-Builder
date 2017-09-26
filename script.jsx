// Copyright 2014-2017 The Bootstrap Authors
// Copyright 2014-2017 Twitter, Inc.
// Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
// The following code helps resolve a bug for IE Mobile Devices and Bootstrap
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.head.appendChild(msViewportStyle)
}

function Header() {
	return (
		<div className="mainHeader">
			<h1>QuantumBit's Official D&D 5e Character Builder!</h1>
			<p>Quite simply the cleanest character gen on the net!</p>
		</div>
	);
}

function Navigation() {
	return(
		<nav>
			<div className="nav row">
				<div className="col">
					<a href="index.html">Home</a>
				</div>
				<div className="col">
					<a href="about.html">About</a>
				</div>
				<div className="col">
					<a href="https://github.com/quantumbitdesign">GitHub</a>
				</div>
			</div>
		</nav>
	);
}

function CharSelect() {
	return (
		<div className="charSelectorWrap container-fluid">
			<div className="row">
				<p>Class:</p>
				<form className="form-group">
				<select class="form-control" id="charSelecter">
					<option selected>Barbarian</option>
					<option>Bard</option>
					<option>Cleric</option>
					<option>Druid</option>
					<option>Fighter</option>
					<option>Monk</option>
					<option>Paladin</option>
					<option>Ranger</option>
					<option>Rogue</option>
					<option>Sorceror</option>
					<option>Warlock</option>
					<option>Wizard</option>
				</select>
				</form>
			</div>
		</div>
	)
}

function AppBody() {
	return (
		<div className="appContainer container-fluid">
			<div className="row">
				<div className="section1 col-sm-6 col-lg-4">
					<p>This section details your character's stats. These are the numbers that drive how strong or weak your character is regarding certain attributes.</p>
				</div>
				<div className="section2 col-sm-6 col-lg-8">
					<p>This section contains information about your character's personality. His/Her background, alignment, failures, successes, life pursuits, etc...</p>
				</div>
			</div>
		</div>
		);
}

class Application extends React.Component {
  render() {
    return (
		<div>
			<Header />
			<Navigation />
			<CharSelect />
			<AppBody />
		</div>
    );
  }
}


ReactDOM.render(<Application />, document.querySelector("#pageContainer"));
















