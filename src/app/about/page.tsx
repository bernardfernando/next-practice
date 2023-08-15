import Link from "next/link";
import React from "react";
export default function AboutPage() {
  return (
    <>
      <div className="flex  min-h-screen flex-col items-center p-20">
        <h1>This is my about page</h1>
        <Link href="/about/food">Food I like</Link>
        <Link href="/about/sport">Sports I like</Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro autem
          sequi velit ad placeat voluptates adipisci voluptatum numquam incidunt
          facere magnam eum ut sed, a beatae perspiciatis obcaecati veniam
          aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          possimus doloribus ad sapiente tenetur sed quisquam porro esse! Rerum
          reiciendis maxime ea quos facere. At illo eveniet illum laboriosam
          quos.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          provident inventore est? Laudantium odio perferendis delectus ex
          asperiores sit? Libero, fugiat! Eveniet, hic dolor architecto
          dignissimos eligendi veritatis fugit a? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Sint culpa maiores fugiat vitae, quis
          illum eveniet beatae laboriosam ab ratione, incidunt cupiditate
          reiciendis sapiente dolorum, doloremque provident cum. Quasi,
          similique.
        </p>
      </div>
    </>
  );
}
