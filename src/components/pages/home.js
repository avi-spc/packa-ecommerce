import { useDocumentTitle } from '../../hooks/useDocumentTitle';

const Home = () => {
	useDocumentTitle('Online shopping made easy');

	return (
		<div className="section-home">
			<main className="home__highlights">
				<img
					src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/4bb228120705693.60b70f428bd19.jpg"
					alt=""
				/>
				{/* <div className="home__highlights-scroller">
					<div></div>
					<div></div>
					<div></div>
				</div> */}
			</main>
			<div className="home__grid-template container">
				<div className="items items--1">
					<img
						src="https://th.bing.com/th/id/OIP.kDGQxyQuX_uLGWm8vhfO8gHaHa?pid=ImgDet&rs=1"
						alt=""
					/>
				</div>
				<div className="items items--2">
					<img
						src="https://www.dusanholovej.com/files/layout/img/blog/TUTORIAL-Shampoo-and-Shower-Gel.jpg"
						alt=""
					/>
				</div>
				<div className="items items--3">
					<img
						src="https://fitnesspell.com/wp-content/uploads/2018/06/dairy.png"
						alt=""
					/>
				</div>
				<div className="items items--4">
					<img
						src="https://st3.depositphotos.com/1005563/16010/i/950/depositphotos_160108128-stock-photo-assorted-cleaning-products.jpg"
						alt=""
					/>
				</div>
				<div className="items items--6">
					<img
						src="https://signimpressions.com/wp-content/uploads/2020/02/promo-items_3.jpg"
						alt=""
					/>
				</div>
				<div className="items items--7">
					<img
						src="https://th.bing.com/th/id/OIP.kBpkhyVlnKi0DHBAyOURiQHaE8?pid=ImgDet&rs=1"
						alt=""
					/>
				</div>
				<div className="items items--8">
					<img
						src="https://social-template.com/wp-content/uploads/2020/09/0160-scaled.jpg"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
