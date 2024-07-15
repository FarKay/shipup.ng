/* eslint-disable react/no-unescaped-entities */
function App() {
  return (
    <div className="grid h-[1244px] w-[1440px] grid-cols-[256px_1fr] grid-rows-[auto_1fr] bg-[#FAF9F8]">
      <div className="sticky left-[265px] flex max-h-[116px] max-w-[1175px] flex-row gap-[10px] bg-[#FFFFFF] p-[30px]">
        <div className="flex max-h-[56px] max-w-[1115px] flex-row items-center justify-center gap-[183.4px]">
          <div className="flex max-h-[24px] max-w-[141px] flex-row items-center justify-center gap-[30px]">
            <div className="flex h-[24px] w-[24px] items-center">
              <img src="/images/menu.png" />
            </div>
            <div className="text-[16px] font-bold leading-[16px]">
              Dashboard
            </div>
          </div>
          <div className="flex h-[56px] w-[302px] flex-row items-center gap-[10px] rounded-[24px] bg-[#F8F9FA] p-[16px]">
            <div className="h-[24px] w-[24px]">
              <img src="/images/Stockholm-icons/General/Search.svg" />
            </div>
            <div className="text-center text-[12px] font-normal leading-[14.4px]">
              Search by sales, products, attendants, branch
            </div>
          </div>
          <div className="flex max-h-[56px] max-w-[307px] flex-row gap-[50px]">
            <div className="h-[46px] w-[46px]">
              <div className="flex h-[46px] w-[46px] items-center justify-center rounded-[12px] bg-[#F8F8FA]">
                <div className="h-[24px] w-[27.2px] bg-[#F6F8FB]">
                  <img src="/images/notifications.png" />
                </div>
              </div>
            </div>
            <div className="flex h-[56px] w-[211px] flex-row items-center justify-between">
              <div className="flex h-[56px] w-[145px] flex-row items-center justify-between rounded-[16px]">
                <div className="h-[56px] w-[56px] rounded-[16px]">
                  <img src="/images/profile-pic.png" />
                </div>
                <div className="flex h-[38px] w-[73px] flex-col items-center justify-center">
                  <div className="font-meduim text-[14px] leading-[16.8px] text-[#9593A0]">
                    Tiger Shroff
                  </div>
                  <div className="text-[12px] font-medium leading-[14.4px] text-[#BBBBBB]">
                    ID:{" "}
                    <span className="text-[12px] font-semibold leading-[14.4px]">
                      1234567
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[12px] bg-[#F0F4FF]">
                <img src="/images/arrow-down.png" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row-span-full flex h-[1244px] w-[265px] flex-col gap-[50px] bg-[#FFFFFF] px-0 pb-[50px] pt-0">
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

      <div className="absolute left-[265px] top-[146px] mx-auto flex max-h-[1096px] max-w-[1175px] flex-col">
        <div className="mx-auto flex max-h-[111px] max-w-[1115px] flex-row gap-[30px]">
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
                  <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[12px] bg-[#F0F4FF]">
                    <img src="/images/arrow-down-blue.png" />
                  </div>
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

        <div className="flex max-h-[534px] max-w-[1175px] flex-row gap-[30px] px-[30px] pb-[30px] pt-0">
          <div className="flex max-h-[504px] max-w-[598px] flex-col gap-[30px] rounded-[20px] bg-[#FFFFFF] p-[30px]">
            <div className="flex h-[36px] w-[534px] flex-row items-center justify-between rounded-[8px]">
              <div className="text-[14px] font-bold leading-[16.8px] text-[#4F4F4F]">
                Store Locations
              </div>
              <div className="flex flex-row items-center justify-between gap-[15px]">
                <span className="text-[12px] font-bold leading-[14.4px] text-[#2C2B5D]">
                  In Europe
                </span>
                <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[12px] bg-[#F0F4FF]">
                  <img src="/images/arrow-down-blue.png" />
                </div>
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
