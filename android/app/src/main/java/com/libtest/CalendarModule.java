package com.libtest;
import android.util.Log;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

import androidx.annotation.NonNull;

public class CalendarModule extends ReactContextBaseJavaModule {
   CalendarModule(ReactApplicationContext context) {
       super(context);
   }

    @ReactMethod
    public static void createCalendarEvent(String name, String location, String date) {
        Log.d("CalendarModule", "Create event called with name: " + name
        + " and location: " + location);
    }

    @NonNull
    @Override
    public String getName() {
        return "CalendarModule";
    }
}