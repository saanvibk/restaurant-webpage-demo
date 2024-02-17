import foodImg from './assets/food.png';

function App() {
  return (
    <section className='main-section'>
      <div className='section-center'>
        <div className='left-box'>
          <img className='food-img' src={foodImg} alt='' />
        </div>
        <div className='right-box'>
          <div className='info'>
            <h5>what we have on menu</h5>
            <h2>
              We serve the best <span className='text-span'>indian food</span>{' '}
              in town
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              libero obcaecati! Repellat obcaecati modi expedita officia quis
              quaerat! Necessitatibus culpa eaque vitae!
            </p>
            <button className='view-btn'>view menu</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
