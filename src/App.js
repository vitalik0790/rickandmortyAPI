import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './components/loader/Loader';
import Container from './components/container/Container';
import AppBar from './components/appBar/AppBar'

const Characters = lazy(() =>
  import('./pages/Characters'),
);
const Episodes = lazy(() =>
  import('./pages/Episodes'),
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFound'),
);
const Locations = lazy(() =>
  import(
    './pages/Locations'),
);
const MyWatchList = lazy(() =>
  import(
    './pages/MyWatchList'),
);

function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/characters" exact>
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
