//
//  buttonView.swift
//  ignEx
//
//  Created by Le Van Tuan on 2/26/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import UIKit

class buttonView: UIView {
    
    @IBOutlet weak var button: UIButton!
    @objc var onStatusChange: RCTDirectEventBlock?
  @objc var isOn: Bool = false 
  override init(frame: CGRect) {
    super.init(frame: frame)
    
  }
  required init?(coder aDecoder: NSCoder) {
    super.init(coder: aDecoder)
  }
    
    @IBAction func btnact(_ sender: Any) {
        isOn = !isOn as Bool
        onStatusChange!(["isOn": isOn])
    }
    
//  override init(frame: CGRect) {
//    super.init(frame: frame)
//    self.addSubview(button)
//  }
//  required init?(coder aDecoder: NSCoder) {
//    fatalError("init has not been implemented")
//  }
//  lazy var button: UIButton = {
//    let button = UIButton.init(type: UIButton.ButtonType.system)
//    button.titleLabel?.font = UIFont.systemFont(ofSize: 20)
//    button.autoresizingMask = [.flexibleWidth, .flexibleHeight]
//    button.addTarget(
//      self,
//      action: #selector(changeBulbStatus),
//      for: .touchUpInside
//    )
//    return button
//  }()
//  @objc func changeBulbStatus() {
//    isOn = !isOn as Bool
//    onStatusChange!(["isOn": isOn])
//  }


}
