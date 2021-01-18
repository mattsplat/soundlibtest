//
//  CalendarManager.swift
//  libtest
//
//  Created by matt on 1/17/21.
//

import Foundation

@objc(CalendarModule)
class CalendarModule: NSObject {

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  @objc(createCalendarEvent:location:date:)
  func createCalendarEvent(_ name: String, location: String, date: String) -> Void {
//    let date = 999
    print("--------- Pretending to create an event on " + date + " at " + location )
  }
}
