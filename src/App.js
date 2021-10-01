import "./stylesheet/magnific-popup.css";
import "./stylesheet/styles.css";
import "./stylesheet/swiper.css";
import "./stylesheet/bootstrap.css";
import "./stylesheet/fontawesome-all.css";

function App() {
  return (
    <div className="App">
      <div class="basic-1">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-xl-5">
              <div class="text-container">
                <h2>Welcome to NASA</h2>
                <hr class="hr-heading" />
                <h4>Team members</h4>
                <ul class="list-unstyled li-space-lg">
                  <li class="media">
                    <i class="fas fa-square"></i>
                    <div class="media-body">Sim Jin Yi</div>
                  </li>
                  <li class="media">
                    <i class="fas fa-square"></i>
                    <div class="media-body">Tan Hoe Theng</div>
                  </li>
                  <li class="media">
                    <i class="fas fa-square"></i>
                    <div class="media-body">Jaclyn Neoh Su Ying</div>
                  </li>
                  <li class="media">
                    <i class="fas fa-square"></i>
                    <div class="media-body">Calvin Tan Wei Yang</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
