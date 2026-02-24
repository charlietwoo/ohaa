import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <div className="logo">OLYMPIJSKÉ HRY 2026</div>
          <button className="cta-button">Lístky</button>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Miláno - Cortina<br />
              <span className="gradient-text">2026</span>
            </h1>
            <p className="hero-subtitle">Zimné olympijské hry</p>
            <p className="hero-description">
              Zažite nezabudnuteľné momenty najväčšieho zimného športového podujatia.
              Elitní športovci z celého sveta sa stretnú v srdci Álp.
            </p>
            <div className="hero-buttons">
              <button className="cta-button large">Kúpiť lístky</button>
              <button className="cta-button-secondary large">Program hier</button>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://images.pexels.com/photos/7944325/pexels-photo-7944325.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Zimné športy v horách"
            />
          </div>
        </div>
      </section>

      <section className="section countdown">
        <div className="container">
          <h2 className="section-title">Začiatok o</h2>
          <div className="countdown-grid">
            <div className="countdown-item">
              <div className="countdown-number">0</div>
              <div className="countdown-label">Dní</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-number">0</div>
              <div className="countdown-label">Hodín</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-number">0</div>
              <div className="countdown-label">Minút</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-number">0</div>
              <div className="countdown-label">Sekúnd</div>
            </div>
          </div>
          <p className="countdown-date">6. február - 22. február 2026</p>
        </div>
      </section>

      <section className="section sports">
        <div className="container">
          <h2 className="section-title">Športy a disciplíny</h2>
          <p className="section-description">
            16 olympijských športov a viac ako 100 medailových podujatí
          </p>
          <div className="sports-grid">
            <div className="sport-card">
              <div className="sport-icon">⛷️</div>
              <h3>Alpské lyžovanie</h3>
              <p>Zjazdové lyžovanie, slalom, obrovský slalom</p>
            </div>
            <div className="sport-card">
              <div className="sport-icon">🏂</div>
              <h3>Snowboarding</h3>
              <p>Halfpipe, slopestyle, paralelný slalom</p>
            </div>
            <div className="sport-card">
              <div className="sport-icon">⛸️</div>
              <h3>Krasokorčuľovanie</h3>
              <p>Jednotlivci, dvojice, tance na ľade</p>
            </div>
            <div className="sport-card">
              <div className="sport-icon">🏒</div>
              <h3>Ľadový hokej</h3>
              <p>Muži a ženy</p>
            </div>
            <div className="sport-card">
              <div className="sport-icon">🛷</div>
              <h3>Bobovanie</h3>
              <p>Dvojbob, štvorboby</p>
            </div>
            <div className="sport-card">
              <div className="sport-icon">🎿</div>
              <h3>Bežecké lyžovanie</h3>
              <p>Sprint, štafety, vytrvalostné preteky</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section venues">
        <div className="container">
          <h2 className="section-title">Olympijské lokality</h2>
          <div className="venues-content">
            <div className="venue-item">
              <div className="venue-image">
                <img
                  src="https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Milano panoráma"
                />
              </div>
              <div className="venue-info">
                <h3>Milano</h3>
                <p>
                  Moderné metropola Lombardie hostí korčuliarske športy a hokej.
                  Svetová móda sa stretáva s olympijským duchom.
                </p>
              </div>
            </div>
            <div className="venue-item reverse">
              <div className="venue-image">
                <img
                  src="https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Dolomity hory"
                />
              </div>
              <div className="venue-info">
                <h3>Cortina d'Ampezzo</h3>
                <p>
                  Ikonické lyžiarske stredisko v Dolomitech. Domov alpského lyžovania
                  a najkrajších horských výhľadov.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">2900</div>
              <div className="stat-label">Športovcov</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">109</div>
              <div className="stat-label">Medailových súťaží</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">16</div>
              <div className="stat-label">Športov</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">90+</div>
              <div className="stat-label">Národov</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section values">
        <div className="container">
          <h2 className="section-title">Olympijské hodnoty</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon gold">🥇</div>
              <h3>Excelentnosť</h3>
              <p>Podávať najlepší možný výkon a neustále sa zlepšovať</p>
            </div>
            <div className="value-card">
              <div className="value-icon silver">🤝</div>
              <h3>Priateľstvo</h3>
              <p>Budovanie lepšieho sveta cez šport a vzájomný rešpekt</p>
            </div>
            <div className="value-card">
              <div className="value-icon bronze">⚖️</div>
              <h3>Rešpekt</h3>
              <p>Fair play, pravidlá a životné prostredie</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section tickets">
        <div className="container">
          <h2 className="section-title">Lístky a vstupenky</h2>
          <div className="tickets-grid">
            <div className="ticket-card">
              <div className="ticket-type">Základný</div>
              <div className="ticket-price">50€</div>
              <ul className="ticket-features">
                <li>Vstup na vybrané podujatia</li>
                <li>Základné sedenie</li>
                <li>Oficiálny program</li>
              </ul>
              <button className="cta-button">Kúpiť teraz</button>
            </div>
            <div className="ticket-card featured">
              <div className="ticket-badge">Najpredávanejší</div>
              <div className="ticket-type">Premium</div>
              <div className="ticket-price">150€</div>
              <ul className="ticket-features">
                <li>Prvoradé sedenie</li>
                <li>Prístup do VIP zóny</li>
                <li>Občerstvenie zahrnuté</li>
                <li>Suvenír zadarmo</li>
              </ul>
              <button className="cta-button">Kúpiť teraz</button>
            </div>
            <div className="ticket-card">
              <div className="ticket-type">VIP Exclusive</div>
              <div className="ticket-price">500€</div>
              <ul className="ticket-features">
                <li>Najlepšie sedenie na štadióne</li>
                <li>Meet & Greet so športovcami</li>
                <li>Exkluzívne občerstvenie</li>
                <li>Limitovaný olympijský merch</li>
              </ul>
              <button className="cta-button">Kúpiť teraz</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <h2 className="cta-title">Buďte súčasťou histórie</h2>
          <p className="cta-description">
            Rezervujte si svoje miesto na najväčšom zimnom športovom podujatí
          </p>
          <button className="cta-button large white">Kúpiť lístky teraz</button>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Milano-Cortina Olympic Games. Všetky práva vyhradené.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
