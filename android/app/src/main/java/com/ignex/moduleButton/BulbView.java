package com.ignex.moduleButton;

import android.content.Context;
import android.graphics.Color;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.RelativeLayout;
import android.widget.TextView;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import com.ignex.R;

public class BulbView extends RelativeLayout {
    private TextView tx;
    private RelativeLayout click;
    public Boolean isOn = false;
    public void setIsOn (Boolean initialBulbStatus){
        isOn = initialBulbStatus;
        updateButton();
    }
    public BulbView(Context context) {
        super(context);
        setUpView(context);

    }

    public BulbView(Context context, AttributeSet attrs) {
        super(context, attrs);
        setUpView(context);

    }

    public BulbView(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        setUpView(context);
    }
    private void setUpView(Context context){
        LayoutInflater.from(context).inflate(R.layout.custom_btn, this, true);
        tx = findViewById(R.id.tx);
        click = findViewById(R.id.click);
        click.setOnClickListener(new OnClickListener() {
            @Override
            public void onClick(View v) {
                changeStatus();
            }
        });

    }
    private void changeStatus() {
        WritableMap event = Arguments.createMap();
        event.putBoolean("isOn", isOn);
        ReactContext reactContext = (ReactContext)getContext();
        reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                getId(),
                "statusChange",
                event);

        updateButton();

    }
    private void updateButton() {
        if (isOn) {
            tx.setText("Switch OFF");
        } else {
            tx.setText("Switch ON");
        }
    }
}
