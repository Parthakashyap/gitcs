import Carousel from "./carousel";

export function CarouselDemo() {
  const slideData = [
    {
      title: "Anshita Pasari",
      button: "Read More",
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww",
      testimonial:
        "Grateful to Richard Sir and the entire SIO Team for making my dream to study in the UK come true.",
      university: "The University of Sheffield, UK",
    },
    {
      title: "John Doe",
      button: "Learn More",
      src: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D",
      testimonial:
        "The support and guidance I received were phenomenal. They made the process smooth and stress-free.",
      university: "University of Oxford, UK",
    },
    {
      title: "Anshita Pasari",
      button: "Read More",
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww",
      testimonial:
        "Grateful to Richard Sir and the entire SIO Team for making my dream to study in the UK come true.",
      university: "The University of Sheffield, UK",
    },
    {
      title: "John Doe",
      button: "Learn More",
      src: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D",
      testimonial:
        "The support and guidance I received were phenomenal. They made the process smooth and stress-free.",
      university: "University of Oxford, UK",
    },
    {
      title: "Anshita Pasari",
      button: "Read More",
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww",
      testimonial:
        "Grateful to Richard Sir and the entire SIO Team for making my dream to study in the UK come true.",
      university: "The University of Sheffield, UK",
    },
    {
      title: "John Doe",
      button: "Learn More",
      src: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D",
      testimonial:
        "The support and guidance I received were phenomenal. They made the process smooth and stress-free.",
      university: "University of Oxford, UK",
    },
  ];

  return (
    <div className="">
      <Carousel slides={slideData} />
    </div>
  );
}
