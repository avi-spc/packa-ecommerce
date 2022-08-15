import { useDocumentTitle } from "../../hooks/useDocumentTitle";

const Home = () => {
    useDocumentTitle("Online shopping made easy");

    return (
        <div className="section-home">
            <main className="home__highlights">
                <div className="home__highlights-scroller">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </main>
            <div className="home__grid-template container">
                <div className="items items--1">1</div>
                <div className="items items--2">2</div>
                <div className="items items--3">3</div>
                <div className="items items--4">4</div>
                <div className="items items--6">6</div>
                <div className="items items--7">7</div>
                <div className="items items--8">8</div>
            </div>
        </div>
    );
};

export default Home;
