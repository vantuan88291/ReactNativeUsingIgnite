//
//  Bulb.m
//  ignEx
//
//  Created by Le Van Tuan on 2/26/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "React/RCTViewManager.h"
@interface RCT_EXTERN_MODULE(Bulb, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(isOn, BOOL)
RCT_EXPORT_VIEW_PROPERTY(onStatusChange, RCTDirectEventBlock)
@end
