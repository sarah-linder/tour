.menu {
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 1001;
}

.menu-toggle {
  background: #333;
  color: white;
  border: none;
  padding: 0.5rem 0.8rem;
  border-radius: 999px;
  cursor: pointer;
}

.menu-list {
  display: none; /* ausgeklappt nur bei Klick */
  list-style: none;
  margin: 0.5rem 0 0 0;
  padding: 0;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.menu-list li a {
  display: block;
  padding: 0.5rem 1rem;
  color: #000;
  text-decoration: none;
}

.menu-list li a:hover {
  background: #eee;
}
