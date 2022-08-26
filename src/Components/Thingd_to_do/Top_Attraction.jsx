import React from "react";
import Carousel from "./Carousel";
import styled from "styled-components";
import { Center } from "@chakra-ui/react";
import styles from './Things.module.css'
const TopAttraction = () => {
	const TAdata = [
		{
			id: 1,
			name: "Phonic Market City",
			category: "Shopping Malls",
			review:"Phoenix Market City was opened in January 2013 and has the distinction of being the largest mall in the city of Pune…",
			list: [
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/83/33/57/caption.jpg?w=500&h=400&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-s/02/9c/f3/75/phoenix-market-city.jpg?w=500&h=400&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/e8/6d/da/img-20191002-163716-largejpg.jpg?w=500&h=400&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/e8/6d/d7/img-20191002-151541-largejpg.jpg?w=500&h=400&s=1",
			],
		},
		{
			id: 2,
			name: "Fontainhas",
			category: "Neighbourhoods",
			list: [
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/1b/d7/58/fontainhas.jpg?w=500&h=-1&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/19/f1/8d/images-22-largejpg.jpg?w=500&h=400&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-s/02/9b/78/83/filename-602593-10150916676012.jpg?w=500&h=400&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-s/02/23/58/ca/portuguese-color-scheme.jpg?w=500&h=-1&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-s/02/23/58/c6/old-mansions-with-tiled.jpg?w=500&h=-1&s=1",
			],
		},
		{
			id: 3,
			name: "Sinhagad Fort",
			category: "Historic Sites",
			review:"As for the fort, conquered as it was by Chatrapati Shivaji, interrupted lines of rock walls, steps, an ammunition room…",
			list: [
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/95/d3/de/photo4jpg.jpg?w=500&h=-1&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/3b/be/f3/sinhagad-fort.jpg?w=500&h=-1&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/8d/d0/05/20191228-123711-largejpg.jpg?w=500&h=400&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/48/b2/ef/reis-magos-fort.jpg?w=500&h=-1&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/69/63/9d/caption.jpg?w=500&h=-1&s=1",
				
			],
		},
		{
			id: 4,
			name: "Church of Our Lady Of Hope",
			category: "Architectural Buildings • Religious Sites",
			list: [
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/6d/dc/bf/photo0jpg.jpg?w=500&h=400&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/c6/bd/80/church-of-our-lady-of.jpg?w=500&h=400&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/c6/bd/7d/church-of-our-lady-of.jpg?w=500&h=400&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/0b/d3/39/beautifully-located-nice.jpg?w=500&h=400&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/13/64/8e/img-20171023-112247-largejpg.jpg?w=500&h=-1&s=1",
				"",
			],
		},
		{
			id: 5,
			name: "St. Alex Church",
			category: "Churches & Cathedrals",
			list: [
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/1c/f3/28/st-alex-church.jpg?w=500&h=-1&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/37/fd/c6/st-alex-church.jpg?w=500&h=400&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/a4/3b/a3/20181207-123252-largejpg.jpg?w=500&h=400&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/a4/3b/a2/20181207-123152-largejpg.jpg?w=500&h=400&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/98/f2/2b/office.jpg?w=500&h=-1&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/6c/ac/f0/st-alex-church.jpg?w=500&h=-1&s=1",
			],
		},
		{
			id: 6,
			name: "The Saturday Night Market",
			category: "Flea & Street Markets",
			list: [
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/b5/b4/36/girls-girls-girls-saturday.jpg?w=500&h=400&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/b5/b4/34/deep-in-the-woods-saturday.jpg?w=500&h=400&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/b5/b2/c6/the-main-stage-saturday.jpg?w=500&h=400&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/97/67/0e/caption.jpg?w=500&h=400&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/d0/e3/f2/saturday-night-market.jpg?w=500&h=400&s=1",
			],
		},
		{
			id: 7,
			name: "National Defence Acadamy",
			category: "Academy",
			review:"Over the years it has emerged as a unique military academy, attracting the best of youth from our nation and also from…",
			list: [
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/98/82/00/img-20181203-162111-largejpg.jpg?w=500&h=400&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/c9/74/2f/national-defence-academy.jpg?w=500&h=-1&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/de/45/8f/national-defence-academy.jpg?w=500&h=-1&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/80/53/d9/nda.jpg?w=500&h=-1&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/80/53/ca/nda.jpg?w=500&h=-1&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/80/53/a2/nda.jpg?w=500&h=-1&s=1",
			],
		},
		{
			id: 8,
			name: "Baga Beach",
			category: "Beaches",
			list: [
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/3e/36/95/baga-sea-beach.jpg?w=500&h=400&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/7b/5a/e8/if-you-are-at-the-beach.jpg?w=500&h=-1&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/7a/83/d4/baga-beach.jpg?w=500&h=-1&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/f8/6c/c3/baga-beach.jpg?w=500&h=-1&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/e4/ef/f9/baga-beach.jpg?w=500&h=-1&s=1",
			],
		},
		{
			id: 9,
			name: "Candolim Beach",
			category: "Beaches",
			list: [
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/eb/79/64/photo1jpg.jpg?w=500&h=-1&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/8c/35/91/beach.jpg?w=500&h=-1&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/84/9d/db/the-monsoon-brings-it.jpg?w=500&h=400&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/84/9d/d1/monsoon-clouds-candolim.jpg?w=500&h=400&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/c9/e3/32/candolim-beach.jpg?w=500&h=-1&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/3f/03/46/img-20191201-130737-largejpg.jpg?w=500&h=400&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/02/dd/6e/goa.jpg?w=500&h=400&s=1",
			],
		},
		{
			id: 10,
			name: "Church of Our Lady of the Immaculate Conception",
			category: "Architectural Buildings",
			list: [
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/4d/d6/8d/our-lady-of-the-immaculate.jpg?w=500&h=400&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/0b/5f/a5/img-20190403-101321-largejpg.jpg?w=500&h=-1&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/83/7b/78/this-is-one-of-the-most.jpg?w=500&h=400&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/39/fb/13/church-of-our-lady-of.jpg?w=500&h=-1&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-s/01/4b/7c/f5/church-of-the-immaculate.jpg?w=500&h=400&s=1",
			],
		},
		{
			id: 11,
			name: "Chapora Beach",
			category: "Beaches",
			list: [
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/ef/82/a8/chapora-beach-view-from.jpg?w=500&h=400&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/9f/11/5b/chapora-beach.jpg?w=500&h=400&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/27/72/d9/img-165182798377476-largejpg.jpg?w=500&h=-1&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/cd/23/de/photo0jpg.jpg?w=500&h=400&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/35/53/ce/view-of-the-beach-from.jpg?w=500&h=400&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/d3/96/ec/chapora-beach.jpg?w=500&h=-1&s=1",
			],
		},
		{
			id: 12,
			name: "Palolem Beach",
			category: "Beaches",
			list: [
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/3e/36/9c/palolem-sea-beach.jpg?w=500&h=400&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/fc/ab/71/20170331-075313-largejpg.jpg?w=500&h=400&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/57/ce/5e/polem-beach.jpg?w=500&h=-1&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/0b/be/d8/palolem-beach-from-the.jpg?w=500&h=-1&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/6a/79/69/great-fun.jpg?w=500&h=400&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/40/49/2e/picteresque.jpg?w=500&h=400&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/40/48/d4/picteresque.jpg?w=500&h=400&s=1",
				"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/2f/49/26/one-of-my-favorite-beaches.jpg?w=500&h=400&s=1",
			],
		},
	];

	return (
		<div>
			<Center>
				{" "}
				<p
					style={{
						fontSize: "30px",
						fontWeight: "700",
						lineHeight: "50px",
						marginTop: "50px",
						color: "black",
					}}
				>
					Top Attractions in pune
				</p>{" "}
			</Center>
			<br />
			<br />
			<center>
				<p style={{ textDecoration: "underline" }}>See All</p>{" "}
			</center>
			<div className={styles.autoslide}>
				{TAdata?.map((e) => (
					<div key={e.id}>
						<div >
							<Carousel data={e.list} alt="" />
						</div>

						<div style={{marginLeft:"30px"}}>
							
							   <div className={styles.greenmini}>
								<img src={require("./images/dots.png")}alt=""/>

							   </div>
							
							<div>
							<h2 style={{fontWeight:"bold"}}>{e.name}</h2>
							<p style={{ }}>{e.category}</p>
							<p style={{ fontSize: "12px" }}>
									{Math.floor(Math.random() * 100) + 50}</p>
									<br></br>
									<p>{e.review}</p>
									</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default TopAttraction;


