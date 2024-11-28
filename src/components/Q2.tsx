
export const Q2 = () => {

  return (
    <div className="h-full w-full px-10 py-6">
      <p className="mb-2 text-lg text-black/60 text-left">Question: 2</p>
      <div>
          <p className="text-black text-base text-left">Question 1：</p>
          <p className="text-black text-sm text-left">
            Explain why does this color not works, and how to fix make it work on
            1st list
          </p>
          <div className="flex justify-around gap-2 py-4 ">
            <div className="container w-auto flex flex-col ">
              <div className="header">5/8 外出確認表</div>
              <div className="content">
                <ol className="shop-list">
                  <li className="item">麵包</li>
                  <li className="item">短袖衣服</li>
                  <li className="item">飲用水</li>
                  <li className="item">帳篷</li>
                </ol>
                <ul className="shop-list">
                  <li className="item">暈車藥</li>
                  <li className="item">感冒藥</li>
                  <li className="item">丹木斯</li>
                  <li className="item">咳嗽糖漿</li>
                </ul>
              </div>
              <div className="footer text-black/30 text-md">以上僅共參考</div>
            </div>
            <div className="text-black text-[4rem] flex items-center"> {`>`} </div>
            <div className="container w-auto flex flex-col ">
              <div className="header">5/8 外出確認表</div>
              <div className="content">
                <ol className="shop-list2">
                  <li className="item">麵包</li>
                  <li className="item">短袖衣服</li>
                  <li className="item">飲用水</li>
                  <li className="item">帳篷</li>
                </ol>
                <ul className="shop-list2">
                  <li className="item">暈車藥</li>
                  <li className="item">感冒藥</li>
                  <li className="item">丹木斯</li>
                  <li className="item">咳嗽糖漿</li>
                </ul>
              </div>
              <div className="footer text-black/30 text-md">以上僅共參考</div>
            </div>
          </div>
          <p className="text-black text-base text-left">Answer 1：</p>
          <p className="text-black/50 text-sm text-left">
            that was .container .shop-list li.item takes precedence over
            .container.shop-list .item, is due to CSS specificity
          </p>
          <p className="text-black text-base text-left font-medium">
            we can fix add li and :nth-child(1) or .blue put on first list to make
            first list turn blue color
          </p>
      </div>
      <div className="mt-4 border-t border-black/10 pt-4">
          <p className="text-black text-base text-left">Question 2：</p>
          <p className="text-black text-sm text-left">
          Write styling make every other line give background color to next one
          </p>
          <div className="flex justify-around gap-2 py-4 ">
            <div className="container w-auto flex flex-col ">
              <div className="header">5/8 外出確認表</div>
              <div className="content">
                <ol className="shop-list">
                  <li className="item">麵包</li>
                  <li className="item">短袖衣服</li>
                  <li className="item">飲用水</li>
                  <li className="item">帳篷</li>
                </ol>
                <ul className="shop-list">
                  <li className="item">暈車藥</li>
                  <li className="item">感冒藥</li>
                  <li className="item">丹木斯</li>
                  <li className="item">咳嗽糖漿</li>
                </ul>
              </div>
              <div className="footer text-black/30 text-md">以上僅共參考</div>
            </div>
            <div className="text-black text-[4rem] flex items-center"> {`>`} </div>
            <div className="container w-auto flex flex-col ">
              <div className="header">5/8 外出確認表</div>
              <div className="content">
                <ol className="shop-list3">
                  <li className="item">麵包</li>
                  <li className="item">短袖衣服</li>
                  <li className="item">飲用水</li>
                  <li className="item">帳篷</li>
                </ol>
                <ul className="shop-list3">
                  <li className="item">暈車藥</li>
                  <li className="item">感冒藥</li>
                  <li className="item">丹木斯</li>
                  <li className="item">咳嗽糖漿</li>
                </ul>
              </div>
              <div className="footer text-black/30 text-md">以上僅共參考</div>
            </div>
          </div>
         
      </div>
    </div>
  );
};
