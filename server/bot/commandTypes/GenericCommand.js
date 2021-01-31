module.exports = class GenericCommand {
  /**
   * Creates a new instance of GenericCommand
   * @param {CommandCallback} fn The function
   * @param {CommandProps} cmdProps - The props
   */
  constructor(attr, fn) {
    this.attr = attr;
    this.fn = fn;
  }

  async run({ Bobb, message, args, addCD }) {
    if (this.props.missingArgs && !args[0]) {
      return this.props.missingArgs;
    }
    if (this.props.minArgs && args.length < this.props.minArgs) {
      return this.props.missingArgs;
    }

    return this.fn({ Bobb, message, args, addCD });
  }

  get props() {
    return Object.assign(
      {
        usage: "{command}",
        cooldown: 2000,
        donorCD: 500,
        isNSFW: false,
        ownerOnly: false,
        dmOnly: false,
        bypass: false
      },
      this.attr,
      { perms: ["SEND_MESSAGES"].concat(this.attr.perms || []) }
    );
  }
};