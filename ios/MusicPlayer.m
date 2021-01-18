//
//  MusicPlayer.m
//  libtest
//
//  Created by matt on 1/17/21.
//

#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(MusicPlayer, NSObject)

RCT_EXTERN_METHOD(play)
RCT_EXTERN_METHOD(pause)
RCT_EXTERN_METHOD(initPlayer:(NSString)url)


@end
