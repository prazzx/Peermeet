import { Link } from 'react-router-dom'
export default function About(){

  return(
    <div className="bg-gradient-to-b from-white via-blue-50 to-blue-100 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4">

        {/* Hero Section */}
        <h1 className="text-4xl font-extrabold text-center mb-6 text-indigo-800 transition transform hover:scale-105">
          About PeerMeet
        </h1>

        <p className="text-lg text-center mb-10 text-gray-700 max-w-3xl mx-auto">
          PeerMeet is a unique platform that connects students and professionals to network, share skills, and build meaningful relationships. Whether you want to teach, learn, collaborate, or even find a like-minded partner, PeerMeet brings everyone together.
        </p>

        {/* Mission */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-10 hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Our Mission</h2>
          <p className="text-gray-800">
            At PeerMeet, our mission is to break barriers between students and professionals by providing a safe, interactive, and smart platform that encourages networking, learning, and personal growth. We believe everyone has something to teach and something to learn.
          </p>
        </div>

        {/* How it works */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-10 hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-700">How PeerMeet Works</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-800">
            <li>Create your profile as a learner, teacher, or both.</li>
            <li>Set your skills, interests, and availability.</li>
            <li>Get matched using our intelligent matching algorithms.</li>
            <li>Connect through chats, video calls, or in-person sessions (coming soon).</li>
            <li>Grow your network and build your future.</li>
          </ul>
        </div>

        {/* Why PeerMeet */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-10 hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Why Choose PeerMeet?</h2>
          <ul className="space-y-4">
            <li>
              <span className="font-bold text-indigo-600">💡 Skill-Based Matching:</span> Connect with people based on what you want to teach or learn.
            </li>
            <li>
              <span className="font-bold text-indigo-600">🤝 Safe & Verified Community:</span> Only verified university students and professionals.
            </li>
            <li>
              <span className="font-bold text-indigo-600">📈 Grow Professionally & Personally:</span> Learn skills, find opportunities, or build relationships.
            </li>
            <li>
              <span className="font-bold text-indigo-600">💻 Easy & Accessible:</span> Use on any device anytime.
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link to ="/signup" className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow hover:bg-indigo-700 transition duration-300 transform hover:scale-105">
            Sign Up Now
          </Link>
        </div>

      </div>
    </div>
  )
}
