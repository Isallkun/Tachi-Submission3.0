import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/fav';

const routes = {
  '/': Home,
  '/home': Home,
  '/detail/:id': Detail,
  '/fav': Favorite,
};

export default routes;
