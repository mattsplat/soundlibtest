package com.libtest;
import android.media.AudioManager;
import android.media.MediaPlayer;
import android.net.Uri;
import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;


import java.io.IOException;

import androidx.annotation.NonNull;

public class MusicPlayer extends ReactContextBaseJavaModule {
    MediaPlayer player = new MediaPlayer();

    MusicPlayer(ReactApplicationContext context) {
        super(context);
        player.setAudioStreamType(AudioManager.STREAM_MUSIC);
    }


    @ReactMethod
    public void initPlayer(String url) {
        if(player.isPlaying()) {
            player.stop();
            player.release();
            player = null;

            player = new MediaPlayer();
            player.setAudioStreamType(AudioManager.STREAM_MUSIC);
        }
        try {
            player.setDataSource(url);
            player.prepare();
        } catch (IOException e) {
            Log.d("MusicPlayer", "Error loading data source");
            e.printStackTrace();
        }
    }

    @ReactMethod
    public void play() {
        player.start();
    }

    @ReactMethod
    public void pause() {
        player.pause();
    }

    @NonNull
    @Override
    public String getName() {
        return "MusicPlayer";
    }
}