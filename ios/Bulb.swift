//
//  Bulb.swift
//  ignEx
//
//  Created by Le Van Tuan on 2/26/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation
@objc(Bulb)
class Bulb: RCTViewManager {
  override func view() -> UIView! {
    return buttonView()
  }
  @objc
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
