﻿

#pragma checksum "C:\Users\alese\Documents\Visual Studio 2015\Projects\Golzin\Golzin\MainPage.xaml" "{406ea660-64cf-4c82-b6f0-42d48172a799}" "AE4A30A0B8D033548DB7D74A3EB8144E"
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Golzin
{
    partial class MainPage : global::Windows.UI.Xaml.Controls.Page, global::Windows.UI.Xaml.Markup.IComponentConnector
    {
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.Windows.UI.Xaml.Build.Tasks"," 4.0.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
 
        public void Connect(int connectionId, object target)
        {
            switch(connectionId)
            {
            case 1:
                #line 59 "..\..\..\MainPage.xaml"
                ((global::Windows.UI.Xaml.Controls.WebView)(target)).NavigationCompleted += this.WebViewControl_NavigationCompleted;
                 #line default
                 #line hidden
                break;
            }
            this._contentLoaded = true;
        }
    }
}


