import Foundation

@objc public class NHSpotify: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
