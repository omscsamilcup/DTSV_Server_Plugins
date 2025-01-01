var seasiondb = new KVDatabase('C:/DTSV_Server/DTSV_Lite_Server/plugins/DTSV_Database/SeasionData')

mc.listen('onServerStarted', () => {
    seasiondb.set(Seasion, 
        {
            SeasionNum: 1,
            SeasionDueDate: 'XX/XX/XXXX'
        }
    )
})