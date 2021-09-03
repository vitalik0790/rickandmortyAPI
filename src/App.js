import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './components/loader/Loader';
import Container from './components/container/Container';
import AppBar from './components/appBar/AppBar'

const Characters = lazy(() =>
  import('./pages/characters/Characters'),
);
const Episodes = lazy(() =>
  import('./pages/episodes/Episodes'),
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFound'),
);
const Locations = lazy(() =>
  import(
    './pages/locations/Locations'),
);
const MyWatchList = lazy(() =>
  import(
    './pages/myWatchList/MyWatchList'),
);

function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <Characters />
          </Route>

          <Route path="/episodes" exact>
            <Episodes />
          </Route>

          <Route path="/locations" exact>
            <Locations />
          </Route>

          <Route path="/my_watch_list" exact>
            <MyWatchList />
          </Route>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
