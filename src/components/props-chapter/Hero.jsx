import React from 'react';

const Hero = ({ age, name, isActive, stats, fightCrime, allies }) => {
  const weaponsList = Object.entries(stats).map(([key, item]) => <li key={key}>{key}: {item}</li>);
  
  return (
    <div className='hero-card'>
      <p className={isActive ? 'active' : 'non-active'}>{ `Here is ${name} (${age} y.o.) superhero profile` }</p>
      <hr/>
      <ol>
        { weaponsList }
      </ol>
      <hr/>
      <p>{`${name}'s superhero action: ${fightCrime(name)}`}</p>
      <p>{`${name}'s superhero allies: ${allies.join(', ')}`}</p>
    </div>
  );
}

export default Hero;
