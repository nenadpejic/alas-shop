import './style.scss';

const Landing = () => {
  return (
    <main className="landing">
      <div className="wrapper">
        <h1 className="landingTitle">Welcome to <span className="shopName">AlasShop</span></h1>
        <p>Have you ever came from shopping only to realize you forgot something?<br />Or perhaps you bought too much food that you failed to consume and it went spoiled?</p>
        <p>Don't worry we got you covered!!</p>
        <p>Make your shopping lists with a click of a button, get your recommended amount of groceries so next time you buy exactly how much you need, get info of how much food you tossed in the trash bin, have an insight into your previous shopping lists, and best of all, help the world to not produce so much unescesery food that eventually ends up as a junk.</p>
      </div>
    </main>
  );
}

export default Landing;