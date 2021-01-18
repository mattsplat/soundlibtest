//
//  CalendarManagerBridge.m
//  libtest
//
//  Created by matt on 1/17/21.
//

// RCTCalendarModule.m
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(CalendarModule, NSObject)

RCT_EXTERN_METHOD(createCalendarEvent:(NSString)name location:(NSString)location date:(NSString)date)

@end
