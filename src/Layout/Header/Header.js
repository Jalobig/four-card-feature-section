import React from 'react'
import classes from './Header.module.scss'

const Header = () => {
  return (
    <header className={classes.header}>
        <h2 className={classes['header__heading--2']}> Reliable, efficient delivery</h2>
      <h1 className={classes['header__heading--1']}>Powered by Technology</h1>
      <p className={classes.header__text}>
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>
    </header>
  )
}

export default Header