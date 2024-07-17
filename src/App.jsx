/* eslint-disable react/no-unescaped-entities */
function App() {
  return (
    <div className="mx-auto grid h-screen w-[1440px] grid-cols-[256px_1fr] grid-rows-[auto_1fr] overflow-hidden bg-[#FAF9F8] font-sans">
      <div className="h-[116px] bg-[#FFFFFF] p-[30px]">
        <div className="flex h-[56px] flex-row justify-between">
          <div className="flex flex-row items-center justify-center gap-[30px]">
            <button>
              <img src="/images/menu.png" />
            </button>
            <span className="text-[16px] font-bold leading-[16px] text-[#4F4F4F]">
              Dashboard
            </span>
          </div>
          <div className="flex w-[302px] flex-row items-center justify-center gap-[10px] rounded-[24px] bg-[#F8F9FA] p-[16px]">
            <div className="h-[24px] w-[24px] cursor-pointer">
              <img src="/images/Stockholm-icons/General/search.png" />
            </div>
            <input
              type="text"
              placeholder="Search by sales, products, attendants, branch"
              className="w-[236px] bg-[#F8F9FA] placeholder:text-[12px] placeholder:font-normal placeholder:leading-[14.4px] placeholder:text-[#BBBBBB] focus:outline-none"
            />
          </div>
          <div className="flex flex-row items-center gap-[50px]">
            <div className="flex h-[46px] w-[46px] cursor-pointer items-center justify-center rounded-[12px] border-[2px] border-[#F6F8FB] bg-[#F6F8FB]">
              <img src="/images/notifications.png" />
            </div>
            <div className="flex flex-row items-center gap-[20px]">
              <div className="flex flex-row gap-[10px]">
                <img src="/images/profile-pic.png" />
                <div className="flex flex-col items-center justify-center">
                  <span className="text-[14px] font-bold leading-[16.8px] text-[#9593A0]">
                    Tiger Shroff
                  </span>
                  <span className="text-[12px] font-medium leading-[14.4px] text-[#BBBBBB]">
                    ID: <span className="font-semibold">1234567</span>
                  </span>
                </div>
              </div>
              <button className="flex h-[36px] w-[36px] items-center justify-center rounded-[12px] bg-[#F0F4FF]">
                <img src="/images/arrow-down.png" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row-span-full flex w-[265px] flex-col gap-[50px] bg-[#FFFFFF] px-0 pb-[50px] pt-0">
        <div className="max-h-[58px] max-w-[265px] bg-[#FAFAFA] py-[17px] pl-[224px] pr-[17px]">
          <div className="max-h-[24px] max-w-[24px]">
            <img src="/images/chevron-left.png" />
          </div>
        </div>
        <div className="text-center text-[36px] font-light leading-[43.2px] text-[#2C2B5D]">
          Ship<span className="font-black text-[#F67366]">Up.ng</span>
        </div>
        <div className="mx-auto flex max-h-[342px] max-w-[235px] flex-col gap-[13px]">
          <div className="max-h-[58px] w-[235px] rounded-[16px] bg-[#2C2B5D] p-[17px]">
            <div className="flex max-h-[24px] max-w-[100px] flex-row items-center gap-[10px]">
              <div>
                <img src="/images/Iconly/Bold/category.png" />
              </div>
              <div className="text-[14px] font-bold leading-[21px] text-[#FFFFFF]">
                Dashboard
              </div>
            </div>
          </div>
          <div className="flex max-h-[58px] max-w-[191px] flex-row gap-[10px] rounded-[16px] p-[17px]">
            <div className="flex max-h-[24px] max-w-[157px] flex-row items-center gap-[20px]">
              <div>
                <img src="/images/Iconly/Bold/graph.png" />
              </div>
              <div className="text-left text-[14px] font-normal leading-[21px] tracking-tight text-[#9593A0]">
                Quotations
              </div>
            </div>
          </div>
          <div className="flex max-h-[58px] max-w-[191px] flex-row gap-[10px] rounded-[16px] p-[17px]">
            <div className="flex max-h-[24px] max-w-[157px] flex-row items-center gap-[20px]">
              <div>
                <img src="/images/Iconly/Bold/buy.png" />
              </div>
              <div className="text-left text-[14px] font-normal leading-[21px] tracking-tight text-[#9593A0]">
                Shipments
              </div>
            </div>
          </div>
          <div className="flex max-h-[58px] max-w-[191px] flex-row gap-[10px] rounded-[16px] p-[17px]">
            <div className="flex max-h-[24px] max-w-[157px] flex-row items-center gap-[20px]">
              <div>
                <img src="/images/Iconly/Bold/truck.png" />
              </div>
              <div className="text-left text-[14px] font-normal leading-[21px] tracking-tight text-[#9593A0]">
                Dispatches
              </div>
            </div>
          </div>
          <div className="flex max-h-[58px] max-w-[191px] flex-row gap-[10px] rounded-[16px] p-[17px]">
            <div className="flex max-h-[24px] max-w-[157px] flex-row items-center gap-[20px]">
              <div>
                <img src="/images/Stockholm-icons/Shopping/Settings.svg" />
              </div>
              <div className="text-left text-[14px] font-normal leading-[21px] tracking-tight text-[#9593A0]">
                Store Management
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="left-[265px] top-[146px] mx-auto flex h-full max-w-[1175px] flex-col overflow-y-auto pt-[30px]">
        <div className="mx-auto flex max-h-[111px] flex-row gap-[20px]">
          <div className="max-h-[111px] w-[256.25px] gap-[10px] rounded-[10px] bg-[#FFFFFF] p-[30px]">
            <div className="flex max-h-[51px] max-w-[211px] flex-row gap-[20px]">
              <div className="h-[50px] w-[50px]">
                <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[12px] bg-[#F0F4FF]">
                  <img src="/images/Iconly/Bold/graph-blue.png" />
                </div>
              </div>
              <div className="flex h-[51px] w-[141px] flex-col gap-[10px]">
                <div className="h-[17px] w-[141px] text-[14px] font-medium leading-[16.8px] text-[#9593A0]">
                  Request For Quotation
                </div>
                <div className="text-[20px] font-semibold leading-[24px] text-[#4F4F4F]">
                  0
                </div>
              </div>
            </div>
          </div>

          <div className="max-h-[111px] w-[256.25px] gap-[10px] rounded-[10px] bg-[#FFFFFF] p-[30px]">
            <div className="flex max-h-[51px] max-w-[211px] flex-row gap-[20px]">
              <div className="h-[50px] w-[50px]">
                <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[12px] bg-[#F0F4FF]">
                  <img src="/images/Iconly/Bold/₦.png" />
                </div>
              </div>
              <div className="flex h-[51px] w-[141px] flex-col gap-[10px]">
                <div className="h-[17px] w-[141px] text-[14px] font-medium leading-[16.8px] text-[#9593A0]">
                  Today's Revenue
                </div>
                <div className="text-[20px] font-semibold leading-[24px] text-[#4F4F4F]">
                  ₦ 7,000
                </div>
              </div>
            </div>
          </div>

          <div className="max-h-[111px] w-[256.25px] gap-[10px] rounded-[10px] bg-[#FFFFFF] p-[30px]">
            <div className="flex max-h-[51px] max-w-[211px] flex-row gap-[20px]">
              <div className="h-[50px] w-[50px]">
                <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[12px] bg-[#F0F4FF]">
                  <img src="/images/Iconly/Bold/buy-blue.png" />
                </div>
              </div>
              <div className="flex h-[51px] w-[141px] flex-col gap-[10px]">
                <div className="h-[17px] w-[141px] text-[14px] font-medium leading-[16.8px] text-[#9593A0]">
                  Shipments
                </div>
                <div className="text-[20px] font-semibold leading-[24px] text-[#4F4F4F]">
                  50
                </div>
              </div>
            </div>
          </div>

          <div className="max-h-[111px] w-[256.25px] gap-[10px] rounded-[10px] bg-[#FFFFFF] p-[30px]">
            <div className="flex max-h-[51px] max-w-[211px] flex-row gap-[20px]">
              <div className="h-[50px] w-[50px]">
                <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[12px] bg-[#F0F4FF]">
                  <img src="/images/Stockholm-icons/General/box.png" />
                </div>
              </div>
              <div className="flex h-[51px] w-[141px] flex-col gap-[10px]">
                <div className="h-[17px] w-[141px] text-[14px] font-medium leading-[16.8px] text-[#9593A0]">
                  Total Warehouse
                </div>
                <div className="text-[20px] font-semibold leading-[24px] text-[#4F4F4F]">
                  100
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex max-h-[451px] max-w-[1175px] flex-row gap-[30px] p-[30px]">
          <div className="flex max-h-[391px] max-w-[668px] flex-col gap-[30px] rounded-[20px] bg-[#FFFFFF] p-[30px]">
            <div className="h-[36px] w-[608px]">
              <div className="flex h-[36px] w-[608px] flex-row items-center justify-between gap-[23px]">
                <div className="text-[14px] font-bold leading-[16.8px] text-[#4F4F4F]">
                  Weekly Shipments Chart
                </div>
                <div className="flex max-h-[36px] flex-row items-center gap-[15px] rounded-[18px]">
                  <div className="text-[12px] font-bold leading-[14.4px] text-[#141414]">
                    This Week
                  </div>
                  <button className="flex h-[36px] w-[36px] items-center justify-center rounded-[12px] bg-[#F0F4FF]">
                    <img src="/images/arrow-down-blue.png" />
                  </button>
                </div>
              </div>
            </div>

            <div className="h-[265px] w-[608px] border-0 border-solid">
              <div className="flex h-[265px] w-[608px] flex-col border-0 border-solid">
                <div className="h-[230px] w-[608px] border-0 border-solid">
                  <img src="/images/graph.png" />
                </div>
                <ul className="mx-[30px] my-[10px] flex max-h-[28px] max-w-[578px] flex-row items-center gap-[33px]">
                  <li className="flex max-h-[28px] max-w-[52px] items-center justify-center rounded-[18x] bg-[#FFFFFF] px-[10px] py-[8px]">
                    <span className="text-center text-[10px] font-normal leading-[12px] text-[#4F4F4F]">
                      Abuja
                    </span>
                  </li>
                  <li className="flex max-h-[28px] max-w-[52px] items-center justify-center rounded-[18x] bg-[#FFFFFF] px-[10px] py-[8px]">
                    <span className="text-center text-[10px] font-normal leading-[12px] text-[#4F4F4F]">
                      Lagos
                    </span>
                  </li>
                  <li className="flex max-h-[28px] max-w-[52px] items-center justify-center rounded-[18x] bg-[#FFFFFF] px-[10px] py-[8px]">
                    <span className="text-center text-[10px] font-normal leading-[12px] text-[#4F4F4F]">
                      Lagos
                    </span>
                  </li>
                  <li className="flex max-h-[28px] max-w-[52px] items-center justify-center rounded-[18x] bg-[#FFFFFF] px-[10px] py-[8px]">
                    <span className="text-center text-[10px] font-normal leading-[12px] text-[#4F4F4F]">
                      Accra
                    </span>
                  </li>
                  <li className="flex max-h-[28px] max-w-[52px] items-center justify-center rounded-[8px] bg-[#FFFFFF] px-[10px] py-[8px]">
                    <span className="text-center text-[10px] font-normal leading-[12px] text-[#4F4F4F]">
                      Bali
                    </span>
                  </li>
                  <li className="flex max-h-[28px] max-w-[52px] items-center justify-center rounded-[8px] bg-[#E3F2FF] px-[10px] py-[8px]">
                    <span className="text-center text-[10px] font-bold leading-[12px] text-[#2C2D5B]">
                      Greece
                    </span>
                  </li>
                  <li className="flex max-h-[28px] max-w-[52px] items-center justify-center rounded-[8px] bg-[#FFFFFF] px-[10px] py-[8px]">
                    <span className="text-center text-[10px] font-normal leading-[12px] text-[#4F4F4F]">
                      Milan
                    </span>
                  </li>
                  <li className="flex max-h-[28px] max-w-[52px] items-center justify-center rounded-[8px] bg-[#FFFFFF] px-[10px] py-[8px]">
                    <span className="text-center text-[10px] font-normal leading-[12px] text-[#4F4F4F]">
                      USA
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex max-h-[391px] max-w-[417px] flex-col gap-[30px] rounded-[20px] bg-[#FFFFFF] p-[30px]">
            <div className="h-[17px] w-[63px]">
              <span className="text-[14px] font-bold leading-[16.8px] text-[#4F4F4F]">
                Deliveries
              </span>
            </div>
            <div className="flex max-h-[284px] max-w-[357px] flex-col gap-[50px]">
              <div className="flex max-h-[180px] max-w-[357px] flex-row gap-[50px]">
                <div className="h-[180px] w-[180px]">
                  <img src="/images/percentage.png" />
                </div>
                <div className="flex max-h-[72px] max-w-[127px] flex-col gap-[30px]">
                  <div className="flex max-h-[72px] max-w-[127px] flex-col gap-[15px]">
                    <div className="flex max-h-[14px] max-w-[127px] flex-row justify-between gap-[20px]">
                      <div className="flex max-h-[14px] max-w-[83px] flex-row items-center gap-[16px]">
                        <div>
                          <img src="/images/red-circle.png" />
                        </div>
                        <span className="text-[12px] font-medium leading-[14.4px] text-[#4F4F4F]">
                          Online
                        </span>
                      </div>
                      <div className="text-center text-[12px] font-medium leading-[14.4px] tracking-tight">
                        78<span>%</span>
                      </div>
                    </div>

                    <div className="flex max-h-[14px] max-w-[127px] flex-row justify-between gap-[20px]">
                      <div className="flex max-h-[14px] max-w-[83px] flex-row items-center gap-[16px]">
                        <div>
                          <img src="/images/orange-circle.png" />
                        </div>
                        <span className="text-[12px] font-medium leading-[14.4px] text-[#4F4F4F]">
                          In Progress
                        </span>
                      </div>
                      <div className="text-center text-[12px] font-medium leading-[14.4px] tracking-tight">
                        78<span>%</span>
                      </div>
                    </div>

                    <div className="flex max-h-[14px] max-w-[127px] flex-row justify-between gap-[20px]">
                      <div className="flex max-h-[14px] max-w-[83px] flex-row items-center gap-[16px]">
                        <div>
                          <img src="/images/blue-circle.png" />
                        </div>
                        <span className="text-[12px] font-medium leading-[14.4px] text-[#4F4F4F]">
                          Delivered
                        </span>
                      </div>
                      <div className="text-center text-[12px] font-medium leading-[14.4px] tracking-tight">
                        78<span>%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto max-h-[54px] max-w-[187px]">
                <button className="flex max-h-[54px] max-w-[187px] items-center justify-center rounded-[20px] bg-[#F0F4FF] px-[40px] py-[20px] text-center text-[12px] font-bold leading-[14.4px]">
                  Download Statistics
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex max-h-[534px] max-w-[1175px] flex-row gap-[20px] px-[30px] pb-[30px] pt-0">
          <div className="flex max-h-[504px] max-w-[598px] flex-col gap-[30px] rounded-[20px] bg-[#FFFFFF] p-[30px]">
            <div className="flex h-[36px] w-[534px] flex-row items-center justify-between rounded-[8px]">
              <div className="text-[14px] font-bold leading-[16.8px] text-[#4F4F4F]">
                Store Locations
              </div>
              <div className="flex flex-row items-center justify-between gap-[15px]">
                <span className="text-[12px] font-bold leading-[14.4px] text-[#2C2B5D]">
                  In Europe
                </span>
                <button className="flex h-[36px] w-[36px] items-center justify-center rounded-[12px] bg-[#F0F4FF]">
                  <img src="/images/arrow-down-blue.png" />
                </button>
              </div>
            </div>
            <div>
              <img src="/images/map.png" />
            </div>
          </div>

          <div className="flex max-h-[504px] max-w-[487px] flex-col gap-[30px] rounded-[20px] bg-[#FFFFFF] p-[30px]">
            <div className="flex h-[44px] w-[427px] flex-row items-center justify-between rounded-[12px]">
              <div className="text-[14px] font-bold leading-[16.8px] text-[#4F4F4F]">
                Products In Stock
              </div>
              <div className="">
                <button className="flex items-center justify-center rounded-[12px] bg-[#F0F4FF] px-[20px] py-[15px] text-[12px] font-bold leading-[14.4px]">
                  View All
                </button>
              </div>
            </div>

            <div className="flex h-[50px] w-[427px] flex-row items-center justify-between">
              <div className="flex max-h-[50px] max-w-[175px] flex-row items-center gap-[20px]">
                <div className="h-[50px] w-[50px] rounded-[10px]">
                  <img src="/images/container.png" />
                </div>
                <div className="text-[12px] font-normal leading-[14.4px] text-[#4F4F4F]">
                  Red velvet frostings
                </div>
              </div>
              <div className="text-[12px] font-medium leading-[14.4px] text-[#4F4F4F]">
                Abuja Branch
              </div>
              <div className="flex flex-row items-center justify-between">
                <span className="text-[12px] font-medium leading-[14.4px] text-[#4F4F4F]">
                  ₦ 7,000
                </span>
                <span className="pl-3 text-[12px] font-normal leading-[14.4px] text-[#9FA2B4]">
                  x 5
                </span>
              </div>
            </div>

            <div className="flex h-[50px] w-[427px] flex-row items-center justify-between">
              <div className="flex max-h-[50px] max-w-[175px] flex-row items-center gap-[20px]">
                <div className="h-[50px] w-[50px] rounded-[10px]">
                  <img src="/images/container.png" />
                </div>
                <div className="text-[12px] font-normal leading-[14.4px] text-[#4F4F4F]">
                  Red velvet frostings
                </div>
              </div>
              <div className="text-[12px] font-medium leading-[14.4px] text-[#4F4F4F]">
                Abuja Branch
              </div>
              <div className="flex flex-row items-center justify-between">
                <span className="text-[12px] font-medium leading-[14.4px] text-[#4F4F4F]">
                  ₦ 7,000
                </span>
                <span className="pl-3 text-[12px] font-normal leading-[14.4px] text-[#9FA2B4]">
                  x 5
                </span>
              </div>
            </div>

            <div className="flex h-[50px] w-[427px] flex-row items-center justify-between">
              <div className="flex max-h-[50px] max-w-[175px] flex-row items-center gap-[20px]">
                <div className="h-[50px] w-[50px] rounded-[10px]">
                  <img src="/images/container.png" />
                </div>
                <div className="text-[12px] font-normal leading-[14.4px] text-[#4F4F4F]">
                  Red velvet frostings
                </div>
              </div>
              <div className="text-[12px] font-medium leading-[14.4px] text-[#4F4F4F]">
                Abuja Branch
              </div>
              <div className="flex flex-row items-center justify-between">
                <span className="text-[12px] font-medium leading-[14.4px] text-[#4F4F4F]">
                  ₦ 7,000
                </span>
                <span className="pl-3 text-[12px] font-normal leading-[14.4px] text-[#9FA2B4]">
                  x 5
                </span>
              </div>
            </div>

            <div className="flex h-[50px] w-[427px] flex-row items-center justify-between">
              <div className="flex max-h-[50px] max-w-[175px] flex-row items-center gap-[20px]">
                <div className="h-[50px] w-[50px] rounded-[10px]">
                  <img src="/images/container.png" />
                </div>
                <div className="text-[12px] font-normal leading-[14.4px] text-[#4F4F4F]">
                  Red velvet frostings
                </div>
              </div>
              <div className="text-[12px] font-medium leading-[14.4px] text-[#4F4F4F]">
                Abuja Branch
              </div>
              <div className="flex flex-row items-center justify-between">
                <span className="text-[12px] font-medium leading-[14.4px] text-[#4F4F4F]">
                  ₦ 7,000
                </span>
                <span className="pl-3 text-[12px] font-normal leading-[14.4px] text-[#9FA2B4]">
                  x 5
                </span>
              </div>
            </div>

            <div className="flex h-[50px] w-[427px] flex-row items-center justify-between">
              <div className="flex max-h-[50px] max-w-[175px] flex-row items-center gap-[20px]">
                <div className="h-[50px] w-[50px] rounded-[10px]">
                  <img src="/images/container.png" />
                </div>
                <div className="text-[12px] font-normal leading-[14.4px] text-[#4F4F4F]">
                  Red velvet frostings
                </div>
              </div>
              <div className="text-[12px] font-medium leading-[14.4px] text-[#4F4F4F]">
                Abuja Branch
              </div>
              <div className="flex flex-row items-center justify-between">
                <span className="text-[12px] font-medium leading-[14.4px] text-[#4F4F4F]">
                  ₦ 7,000
                </span>
                <span className="pl-3 text-[12px] font-normal leading-[14.4px] text-[#9FA2B4]">
                  x 5
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
