using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Threading.Tasks;
using Windows.ApplicationModel.DataTransfer;
using Windows.Foundation;
using Windows.Graphics.Imaging;
using Windows.Phone.UI.Input;
using Windows.Storage;
using Windows.Storage.Streams;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Media.Imaging;
using Windows.UI.Xaml.Navigation;
using Windows.Phone.Devices.Notification;
using Windows.UI.ViewManagement;
using System.Globalization;





// The WebView Application template is documented at http://go.microsoft.com/fwlink/?LinkID=391641

namespace Golzin
{
    public sealed partial class MainPage : Page
    {

        // TODO: Replace with your URL here.
        private static readonly Uri HomeUri = new Uri("ms-appx-web:///www/index.html", UriKind.Absolute);//game
        private static InMemoryRandomAccessStream ims = null;
        private static WriteableBitmap bmp = null;
        public static BitmapImage imgs = null;
        public static StorageFile image = null;
        public string ant_value = null;
        public static string data = null;



        public MainPage()
        {
            this.InitializeComponent();

            this.NavigationCacheMode = NavigationCacheMode.Required;
            WebViewControl.ScriptNotify += WebViewControl_ScriptNotify;
            
           
            DispatcherTimer Timer = new DispatcherTimer()
            {
                Interval = TimeSpan.FromSeconds(3)
            };
            Timer.Tick += (s, a) =>
            {
                Timer.Stop();
                startLogo.Visibility = Visibility.Collapsed;
            };
            Timer.Start();
            
        }


        private async void WebViewControl_ScriptNotify(object sender, NotifyEventArgs e)
        {
            if (e.CallingUri.Scheme == "ms-appx-web")
            {
                if (e.Value.Contains("dex"))
                {
                    string s = e.Value;
                    string output = s.Substring(s.IndexOf(',') + 1);
                    int valor = int.Parse(output);
                    Debug.WriteLine("dex " + valor);

                    if (valor % 2 != 0)
                    {
                        VibrationDevice testVibrationDevice = VibrationDevice.GetDefault();
                        testVibrationDevice.Vibrate(TimeSpan.FromSeconds(1)); 
                        //testVibrationDevice.Cancel();
                    }
                }

                if (e.Value.Contains("ant"))
                {
                    string s = e.Value;
                    string output = s.Substring(s.IndexOf(',') + 1);
                    ant_value = output;//int.Parse(output);
                    Debug.WriteLine("ant " + ant_value);

                    DataTransferManager.ShowShareUI();
                    //DataTransferManager dataTransferManager = DataTransferManager.GetForCurrentView();
                    //dataTransferManager.DataRequested += new TypedEventHandler<DataTransferManager, DataRequestedEventArgs>(MainPage_DataRequested);
                    DataTransferManager dataTransferManager = DataTransferManager.GetForCurrentView();
                    dataTransferManager.DataRequested += MainPage_DataRequested;
                    
                }

                if (e.Value.Contains("data"))
                {
                    String x = e.Value;
                    data = x.Replace("data:image/png;base64,", "");
                    await Base64StringToBitmap(data);
                    alpha.Source = bmp;
                    Debug.WriteLine("data " + data);
                }
            }
        }


        public async static Task<BitmapSource> Base64StringToBitmap(string data)
        {
            if (string.IsNullOrEmpty(data))
            {
                return null;
            }

            byte[] imageBytes = Convert.FromBase64String(data);

            ims = new InMemoryRandomAccessStream();

            DataWriter dataWriter = new DataWriter(ims.GetOutputStreamAt(0));
            dataWriter.WriteBytes(imageBytes);
            await dataWriter.StoreAsync();
            ims.Seek(0);

            imgs = new BitmapImage();
            await imgs.SetSourceAsync(ims);

            bmp = new WriteableBitmap(imgs.PixelHeight, imgs.PixelWidth);
            bmp.Invalidate();
            ims.Seek(0);
            bmp.SetSource(ims);

            return bmp;
        }


        private async void MainPage_DataRequested(DataTransferManager sender, DataRequestedEventArgs e)
        {
            DataRequestDeferral deferral = e.Request.GetDeferral();

            e.Request.Data.Properties.Title = "Golzin";
            Uri www = new Uri("http://viish.co.nf");
            e.Request.Data.SetText("Hello World, Golzin' your score: " + ant_value + "\n download in: " + www);

            image = await GetFileFromBitmap(bmp);

            if (image != null)
            {
                List<IStorageItem> storageItems = new List<IStorageItem>();
                storageItems.Add(image);
                e.Request.Data.SetStorageItems(storageItems);
            }

            deferral.Complete();
        }


        private async Task<StorageFile> GetFileFromBitmap(WriteableBitmap bmp)
        {
            string fileName = "MyImage.png";
            StorageFile file = await ApplicationData.Current.TemporaryFolder.CreateFileAsync(fileName, CreationCollisionOption.ReplaceExisting);

            using (IRandomAccessStream stream = await file.OpenAsync(FileAccessMode.ReadWrite))
            {
                BitmapEncoder encoder = await BitmapEncoder.CreateAsync(BitmapEncoder.PngEncoderId, stream);
                Stream pixelStream = bmp.PixelBuffer.AsStream();
                byte[] pixels = new byte[pixelStream.Length];
                await pixelStream.ReadAsync(pixels, 0, pixels.Length);
                encoder.SetPixelData(BitmapPixelFormat.Bgra8, BitmapAlphaMode.Ignore, (uint)bmp.PixelWidth, (uint)bmp.PixelHeight, 96.0, 96.0, pixels);
                await encoder.FlushAsync();
            }

            return file;
        }


        


        /*
        private async void MainPage_DataRequested(DataTransferManager sender, DataRequestedEventArgs e)
        {     
            DataRequestDeferral deferral = e.Request.GetDeferral();
            e.Request.Data.Properties.Title = "Golzin";
            Uri www = new Uri("http://viish.co.nf");
            e.Request.Data.SetText("Hello World, Golzin' your score: " + ant_value + "\n download in: " + www);

            
            StorageFile image = await GetFileFromBitmap(bmp);

            if (image != null)
            {
                List<IStorageItem> storageItems = new List<IStorageItem>();
                storageItems.Add(image);
                e.Request.Data.SetStorageItems(storageItems);

                //e.Request.Data.SetBitmap(RandomAccessStreamReference.CreateFromFile(image));
                //e.Request.Data.Properties.Thumbnail = RandomAccessStreamReference.CreateFromFile(image);
            }
            //else
            //{
            //    e.Request.Data.SetText(e.Request.Data.Properties.Description);
            //}
            
            
            deferral.Complete();
        }



        private async Task<StorageFile> GetFileFromBitmap(WriteableBitmap writeableBitmp)
        {
            string fileName = "MyImage.png";

            //salvar arquivo no cell
            //StorageFolder localFolder = await KnownFolders.PicturesLibrary.CreateFolderAsync("golzin", CreationCollisionOption.ReplaceExisting);
            //StorageFile file = await localFolder.CreateFileAsync(fileName + ".png", CreationCollisionOption.GenerateUniqueName);

            StorageFile file = await ApplicationData.Current.LocalFolder.CreateFileAsync(fileName, CreationCollisionOption.ReplaceExisting);//LocalFolder//TemporaryFolder

            using (IRandomAccessStream stream = await file.OpenAsync(FileAccessMode.ReadWrite))
            {
                BitmapEncoder encoder = await BitmapEncoder.CreateAsync(BitmapEncoder.PngEncoderId, stream);
                Stream pixelStream = writeableBitmp.PixelBuffer.AsStream();
                byte[] pixels = new byte[pixelStream.Length];
                await pixelStream.ReadAsync(pixels, 0, pixels.Length);
                encoder.SetPixelData(BitmapPixelFormat.Bgra8, BitmapAlphaMode.Ignore,
                            (uint)writeableBitmp.PixelWidth,
                            (uint)writeableBitmp.PixelHeight,
                            96.0,
                            96.0,
                            pixels);
                await encoder.FlushAsync();
            }

            return file;
        }
        */


        protected override async void OnNavigatedTo(NavigationEventArgs e)
        {
            base.OnNavigatedTo(e);

            WebViewControl.Navigate(HomeUri);

            StatusBar statusBar = StatusBar.GetForCurrentView();
            await statusBar.HideAsync();
            //await statusBar.ShowAsync();
            HardwareButtons.BackPressed += this.MainPage_BackPressed;
        }

        protected override void OnNavigatedFrom(NavigationEventArgs e)
        {
            base.OnNavigatedFrom(e);
            HardwareButtons.BackPressed -= this.MainPage_BackPressed;
        }

        private void MainPage_BackPressed(object sender, BackPressedEventArgs e)
        {
            if (WebViewControl.CanGoBack)
            {
                WebViewControl.GoBack();
                e.Handled = true;
            }
        }

        private void WebViewControl_NavigationCompleted(WebView sender, WebViewNavigationCompletedEventArgs args)
        {
            if (!args.IsSuccess)
            {
                Debug.WriteLine("Navigation to this page failed, check your internet connection.");
            }
        }

        private void ForwardAppBarButton_Click(object sender, RoutedEventArgs e)
        {
            if (WebViewControl.CanGoForward)
            {
                WebViewControl.GoForward();
            }
        }

        private void HomeAppBarButton_Click(object sender, RoutedEventArgs e)
        {
            WebViewControl.Navigate(HomeUri);
        }

    }
}
