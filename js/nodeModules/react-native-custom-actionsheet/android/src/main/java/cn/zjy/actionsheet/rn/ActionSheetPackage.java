package cn.zjy.actionsheet.rn;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Created by ZJY on 2016/10/7.
 */
public class ActionSheetPackage implements ReactPackage {

  
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new ActionSheetModule(reactContext));
        return modules;
    }

   
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }

   
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
