import { HomePage } from './components/HomePage';
import { MediaPage } from './components/MediaPage';
import { PipelinePage } from './components/PipelinePage';
import { TeamPage } from './components/TeamPage';
import { Route, Routes , HashRouter } from 'react-router-dom';


function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/pipeline" element={<PipelinePage />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
