import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  events: any[] = [
    {
      title: 'Cultural Fusion Night: "Around the World in One Evening',
      description: {
        firstParagraph: "Embark on a global journey without leaving the comfort of our hostel! Join us for a magical evening of Cultural Fusion, where we're turning our common areas into a vibrant tapestry of traditions, flavors, and experiences from around the world.",
        sections: 
        [
          {
            title: "🌍 Explore the Diversity",
            description: "Step into our transformed spaces adorned with flags, banners, and cultural artifacts, as we take you on a visual tour of different countries. Immerse yourself in the colors, textures, and stories that make each culture unique."
          },
          {
            title: "👗 Dress the Part",
            description: "Get ready to showcase your creativity! Whether it's donning traditional attire or putting a modern spin on cultural fashion, we invite you to express the beauty of diversity through your own unique style."
          },
          {
            title: "🍜 Culinary Adventure",
            description: "Satisfy your taste buds with a culinary journey spanning continents. Indulge in an array of international cuisines, each dish carefully curated to bring authentic flavors straight to your plate. Our food stations will be a feast for both the eyes and the palate."
          },
          {
            title: "🎶 Rhythms of the World",
            description: "Let the beats of diverse music transport you as we curate a playlist that traverses the globe. From the lively rhythms of Latin America to the soulful tunes of Asia, experience the world's melodies in one unforgettable night."
          },
          {
            title: "💃 Live Performances",
            description: "Be captivated by live performances that showcase the rich cultural tapestry of our global community. Enjoy traditional dances, musical acts, and demonstrations that will transport you to faraway lands."
          },
          {
            title: "🌐 Interactive Stations",
            description: "Engage your senses with hands-on activities representing different cultures. Try your hand at henna artistry, experience the elegance of calligraphy, or capture the moment at our international-themed photo booth."
          },
          {
            title: "🌟 Contest and Prizes",
            description: "Participate in friendly competitions and quizzes for a chance to win exciting prizes. Whether you excel in trivia, have the best-dressed cultural attire, or simply want to share your unique cultural story, there's something for everyone."
          },
          {
            title: "🤝 Cultural Exchange",
            description: "Connect with fellow travelers on our Cultural Exchange Board, where you can share your own travel stories, cultural insights, and recommendations. It's a space for building connections and celebrating the diversity within our community."
          }
        ]
      },
      date: this.addDays(new Date(), 3),
    },
    {
      title: 'Adventure Package: "Discover the Thrill"',
      description: {
        firstP: "Get ready for an adrenaline-pumping adventure with our exclusive Adventure Package. Whether you're an outdoor enthusiast or a thrill-seeker, this package is designed to immerse you in the natural wonders of our surroundings.",
        sections: [
          {
            title: "🏞️ Explore the Wilderness",
            description: "Embark on a guided hiking tour through breathtaking landscapes, conquer challenging biking trails, or experience the rush of water sports. Our adventure package is your ticket to an unforgettable outdoor experience."
          },
          {
            title: "🌄 Scenic Views and Excitement",
            description: "Indulge in the beauty of nature while satisfying your craving for excitement. From mountain vistas to riverside trails, our adventure package ensures a perfect blend of awe-inspiring scenery and heart-pounding activities."
          },
          {
            title: "🛶 Guided Tours and Equipment",
            description: "Our experienced guides will lead you through the best routes, providing insights into the local flora and fauna. All equipment is provided, ensuring a safe and thrilling adventure for every participant."
          },
          {
            title: "🌟 Unleash Your Adventurous Spirit",
            description: "Whether you're a seasoned adventurer or a first-timer, our Adventure Package promises an unforgettable journey. Join us for an experience that combines the thrill of exploration with the beauty of the great outdoors."
          }
        ]
      },
      date: this.addDays(new Date(), 6),
    },
    {
      title: 'Historical Walking Tour: "Step Back in Time"',
      description: {
        firstP: "Embark on a journey through history with our captivating Historical Walking Tour. Immerse yourself in the rich tapestry of our locale as our expert guides lead you through iconic landmarks, hidden gems, and the stories that shaped our past.",
        sections: [
          {
            title: "🏰 Explore Landmarks and Architecture",
            description: "Step back in time as you stroll through the historical heart of our city. Discover architectural wonders, centuries-old landmarks, and the stories behind each cobblestone, all woven into the fabric of our cultural heritage."
          },
          {
            title: "📜 Anecdotes and Legends",
            description: "Our knowledgeable guides will regale you with anecdotes, legends, and fascinating facts about the characters who shaped our history. From royal tales to everyday life, our Historical Walking Tour is a captivating storytelling experience."
          },
          {
            title: "👣 Guided Exploration",
            description: "Let our guides lead you through narrow alleys and grand avenues, offering insights into the historical significance of each location. Feel the echoes of the past as you absorb the charm and character of our storied city."
          },
          {
            title: "🌍 Time-Traveling Experience",
            description: "Join us for a time-traveling experience that transports you to bygone eras. The Historical Walking Tour is not just a journey through history; it's an immersive exploration of the cultural roots that make our city unique."
          }
        ]
      },
      date: this.addDays(new Date(), 2),
    },
    {
      title: 'Local Food Tasting Experience: "Savor the Flavor"',
      description: {
        firstP: "Indulge your taste buds in a culinary adventure with our Local Food Tasting Experience. Immerse yourself in the diverse flavors of our region as our expert chefs curate a delectable journey through the best local dishes and hidden culinary gems.",
        sections: [
          {
            title: "🍽️ Culinary Delights",
            description: "Savor the authentic taste of our region with a curated selection of local dishes. From street food to fine dining, our Local Food Tasting Experience is a gastronomic journey designed to please even the most discerning palates."
          },
          {
            title: "🥂 Food Pairing and Exquisite Tastes",
            description: "Experience the art of food pairing as our chefs guide you through a symphony of flavors. Discover the perfect combinations of local ingredients, spices, and culinary techniques that make each dish a masterpiece."
          },
          {
            title: "👨‍🍳 Chef's Insights",
            description: "Our passionate chefs will share insights into the cultural significance of each dish, highlighting the stories and traditions behind the flavors. Engage in a culinary dialogue that enhances your appreciation for the local food scene."
          },
          {
            title: "🌶️ A Feast for the Senses",
            description: "Join us for a feast that transcends taste and becomes a celebration of our local culinary heritage. The Local Food Tasting Experience is not just a meal; it's a sensory journey through the diverse and delicious flavors of our region."
          }
        ]
      },
      date: this.addDays(new Date(), 1),
    }
  ]
  constructor() { }

  get getEvents() {
    return this.events;
  }

  addDays(date: Date, days: number): any {
    const weekday: any = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let millisecondsDate = date.getTime();
    millisecondsDate = millisecondsDate + 1000 * 60 * 60 * 24 * days;
    let retDate = new Date(millisecondsDate);
    let ret = {
      weekDay: weekday[retDate.getDay()],
      day: retDate.getDate(),
      month: retDate.getMonth() + 1,
      hour: Math.floor(Math.random() * 24 % 6 + 18),
      minutes: '00'
    }
    return ret;
  }
}
