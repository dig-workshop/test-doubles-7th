import { DefaultCheckedPassword } from "./DefaultCheckPassword";
import { LaunchFireworkImpl } from "./LaunchFirework";
import { DummyFirework } from "./DummyFirework";

// スタブのテストでは、説明の簡略化のためにlaunchが文字列を返す仕様にしていました。
// ですが、本来はLaunchFireworkImplが何かしらバリデーションチェックした結果花火が打ち上げられるべきです。
// そこで、花火を打つ時は、FireworkオブジェクトとcheckPasswordオブジェクトとパスワードを渡し、正しければFireworkのfireメソッドを呼ぶようにします。
// 本物のFireworkオブジェクトのfireメソッドを呼んでしまうと、本物の花火が打ち上げされてしまいます。(花火打ち上げ装置は現在修理中のため、不具合を起こす可能性あり)
// Dummyを使用して、バリデーションチェックが正しく行われていることを確認しましょう。


describe('LaunchFireworkImpl（花火打ち上げ装置）のテスト', () => {
    it('間違ったパスワードの場合、errorがthrowされる_validationCheck', () => {

        // 現状のコードですが、テストとしてはパスしてしまいます。
        // ですが、花火打ち上げ装置は現在修理中のため、そのまま使うと不具合を起こす可能性があります。
        // 正しくテストが実行できるように修正してください。

        const invalidPassword = '88event'
        const dummyFireworks= new DummyFirework()
        const defaultCheckPassword = new DefaultCheckedPassword()
        const launchFirework = new LaunchFireworkImpl(dummyFireworks,defaultCheckPassword,invalidPassword)

        expect(() => launchFirework.validationCheck()).toThrowError()
    })
})
