import React, { useEffect, useState } from 'react';
import { Play, Pause, Music, Gamepad2, Heart, User } from 'lucide-react';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const musicTracks = [
    { id: 1, title: "Bài hát yêu thích #1", artist: "Tên nghệ sĩ", duration: "3:45" },
    { id: 2, title: "Bài hát yêu thích #2", artist: "Tên nghệ sĩ", duration: "4:12" },
    { id: 3, title: "Bài hát yêu thích #3", artist: "Tên nghệ sĩ", duration: "3:28" },
  ];

  const favoriteGames = [
    { id: 1, title: "Game yêu thích #1", genre: "RPG", status: "Đang chơi" },
    { id: 2, title: "Game yêu thích #2", genre: "Action", status: "Hoàn thành" },
    { id: 3, title: "Game yêu thích #3", genre: "Strategy", status: "Đang chơi" },
  ];

  const togglePlay = (trackId) => {
    if (currentTrack === trackId && isPlaying) {
      setIsPlaying(false);
    } else {
      setCurrentTrack(trackId);
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-400/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        
        {/* Header - Giới thiệu */}
        <section className="text-center mb-16">
          <div 
            className={`transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Avatar */}
            <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl border-4 border-yellow-500/30">
              <User size={48} className="text-black" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Xin chào! 👋
            </h1>
            <h2 className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6">
              Tôi là [Tên của bạn]
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Chào mừng đến với không gian cá nhân của tôi! Nơi tôi chia sẻ những game và âm nhạc yêu thích. 
              Hãy cùng khám phá những điều thú vị nhé! ✨
            </p>
          </div>
        </section>

        {/* Về tôi - Đơn giản */}
        <section 
          className={`mb-16 transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center">
              <Heart className="mr-3" size={24} />
              Một chút về tôi
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Tôi là một người đam mê game và âm nhạc. Thích khám phá những trò chơi mới, 
              nghe nhạc trong lúc rảnh rỗi và chia sẻ những trải nghiệm thú vị với mọi người. 
              Cuộc sống đơn giản nhưng đầy màu sắc! 🎮🎵
            </p>
          </div>
        </section>

        {/* Game yêu thích */}
        <section 
          className={`mb-16 transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center">
              <Gamepad2 className="mr-3" size={24} />
              Game yêu thích của tôi
            </h3>
            
            <div className="grid gap-4">
              {favoriteGames.map((game, index) => (
                <div 
                  key={game.id}
                  className="bg-black/30 p-6 rounded-xl border border-yellow-500/10 hover:border-yellow-500/30 hover:bg-yellow-500/5 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors">
                        {game.title}
                      </h4>
                      <p className="text-gray-400 mt-1">Thể loại: {game.genre}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        game.status === 'Đang chơi' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        {game.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Âm nhạc yêu thích */}
        <section 
          className={`mb-16 transition-all duration-1000 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center">
              <Music className="mr-3" size={24} />
              Âm nhạc yêu thích
            </h3>
            
            <div className="space-y-4">
              {musicTracks.map((track, index) => (
                <div 
                  key={track.id}
                  className="bg-black/30 p-4 rounded-xl border border-yellow-500/10 hover:border-yellow-500/30 hover:bg-yellow-500/5 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => togglePlay(track.id)}
                        className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center hover:bg-yellow-500/30 transition-all duration-300 group-hover:scale-110"
                      >
                        {currentTrack === track.id && isPlaying ? (
                          <Pause className="text-yellow-400" size={20} />
                        ) : (
                          <Play className="text-yellow-400 ml-1" size={20} />
                        )}
                      </button>
                      <div>
                        <h4 className="text-white font-semibold group-hover:text-yellow-400 transition-colors">
                          {track.title}
                        </h4>
                        <p className="text-gray-400 text-sm">{track.artist}</p>
                      </div>
                    </div>
                    <div className="text-gray-400 text-sm">
                      {track.duration}
                    </div>
                  </div>
                  
                  {/* Progress bar giả lập */}
                  {currentTrack === track.id && isPlaying && (
                    <div className="mt-3">
                      <div className="w-full bg-gray-700 rounded-full h-1">
                        <div className="bg-yellow-400 h-1 rounded-full animate-pulse" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer đơn giản */}
        <footer 
          className={`text-center transition-all duration-1000 delay-900 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/10">
            <p className="text-gray-400 mb-2">
              Cảm ơn bạn đã ghé thăm! 💛
            </p>
            <p className="text-gray-500 text-sm">
              Hãy cùng chia sẻ những trải nghiệm thú vị về game và âm nhạc nhé!
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;