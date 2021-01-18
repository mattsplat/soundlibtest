//
//  MusicPlayer.swift
//  libtest
//
//  Created by matt on 1/17/21.
//

import AVFoundation
import Foundation

@objc(MusicPlayer)
class MusicPlayer: NSObject {
  public static var instance = MusicPlayer()
  var player = AVPlayer()
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  @objc
  func initPlayer(_ url: String) {
    guard let url = URL(string: url) else { return }
    let playerItem = AVPlayerItem(url: url)
    player = AVPlayer(playerItem: playerItem)
    playAudioBackground()
  }
  
  func playAudioBackground() {
    do {
      try AVAudioSession.sharedInstance().setCategory(AVAudioSession.Category.playback, mode: AVAudioSession.Mode.default, options: [.mixWithOthers, .allowAirPlay])
      print("Playback OK")
      try AVAudioSession.sharedInstance().setActive(true)
      print("Session is Active")
    } catch {
      print(error)
    }
  }
  
  @objc func pause(){
    player.pause()
  }
  
  @objc func play() {
    player.play()
  }
}
