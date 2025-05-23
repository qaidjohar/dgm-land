import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Users, X } from 'lucide-react';
import YouTube from 'react-youtube';

const LplSection: React.FC = () => {
  const videoId = '12-bu_NCGzY';
  const communityUrl = 'https://gg.letsplay.live';
  const [isPlaying, setIsPlaying] = useState(false);
  
  const handleVideoClick = () => {
    setIsPlaying(true);
  };

  const handleCloseVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(false);
  };

  return (
    <section className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blackish via-[#0A2516]/60 to-blackish"></div>
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#00FF66]/5 blur-[120px]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <div className="mb-6 relative group">
              <div className="absolute inset-0 bg-[#00FF66]/20 blur-[25px] group-hover:blur-[35px] transition-all duration-300"></div>
              <img 
                src="/images/letsplaylive-logo.png" 
                alt="Let's Play Live"
                className="h-24 w-auto relative z-10 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-lg text-gray-300 mb-6">
              Let's Play Live is the face of Dynasty to millions of gamers worldwide — delivering tournaments, content, and broadcast infrastructure across 40+ countries.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              As our premier consumer-facing brand, LPL showcases the capabilities of our white-label platform in action.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleVideoClick}
                className="button-primary inline-flex items-center justify-center bg-gradient-to-r from-[#00FF66] to-[#0A2516]"
              >
                <Play size={18} className="mr-2" /> Watch LPL Highlights
              </motion.button>
              
              <motion.a
                href={communityUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="button-secondary inline-flex items-center justify-center border-[#00FF66] hover:bg-[#00FF66]/10"
              >
                <Users size={18} className="mr-2" /> Join Our Community
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div 
              className="relative rounded-2xl overflow-hidden group cursor-pointer" 
              onClick={handleVideoClick}
            >
              <div className="aspect-video bg-gradient-to-br from-[#0A2516] via-[#00FF66]/10 to-blackish relative">
                <div className="absolute inset-0">
                  <YouTube
                    videoId={videoId}
                    opts={{
                      width: '100%',
                      height: '100%',
                      playerVars: {
                        autoplay: 1,
                        mute: 1,
                        controls: 0,
                        modestbranding: 1,
                        loop: 1,
                        playlist: videoId,
                        playsinline: 1,
                        showinfo: 0,
                        rel: 0
                      }
                    }}
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    iframeClassName="w-full h-full"
                  />
                </div>
                
                <div className="absolute top-4 left-4 bg-blackish/80 backdrop-blur-sm py-2 px-4 rounded-lg border border-[#00FF66]/30">
                  <div className="text-[#00FF66] font-bold text-lg">LPL</div>
                  <div className="text-xs text-white/70">Let's Play Live</div>
                </div>
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 rounded-full bg-[#00FF66]/20 backdrop-blur-sm border border-[#00FF66] flex items-center justify-center"
                  >
                    <Play size={32} className="text-[#00FF66]" />
                  </motion.div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="text-center">
                <div className="text-[#00FF66] text-2xl font-bold">40+</div>
                <div className="text-sm text-gray-400">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-[#00FF66] text-2xl font-bold">5M+</div>
                <div className="text-sm text-gray-400">Monthly Users</div>
              </div>
              <div className="text-center">
                <div className="text-[#00FF66] text-2xl font-bold">2K+</div>
                <div className="text-sm text-gray-400">Events Yearly</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full-screen video modal */}
      {isPlaying && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={handleCloseVideo}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#00FF66]/20 backdrop-blur-sm border border-[#00FF66] flex items-center justify-center hover:bg-[#00FF66]/30 transition-colors"
          >
            <X size={24} className="text-[#00FF66]" />
          </button>
          <div className="w-full max-w-4xl aspect-video">
            <YouTube
              videoId={videoId}
              opts={{
                height: '100%',
                width: '100%',
                playerVars: {
                  autoplay: 1,
                  controls: 1,
                  modestbranding: 1,
                  rel: 0
                }
              }}
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default LplSection;